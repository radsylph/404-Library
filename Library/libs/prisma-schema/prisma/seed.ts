import { PrismaClient, userType, resourceType } from '@prisma/client';
import { betterAuth } from 'better-auth';
import { PrismaPg } from '@prisma/adapter-pg';
import { prismaAdapter } from 'better-auth/adapters/prisma';

const adapter = new PrismaPg({connectionString: process.env.DATABASE_URL})
const prisma = new PrismaClient({adapter});

// Create BetterAuth instance for seeding
const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: 'postgresql' }),
  advanced: {
    database: {
      generateId: false,
      cookiePrefix: '404-library',
    },
  },
  emailAndPassword: {
    enabled: true,
  },
});

async function defaultRoles(): Promise<void> {
  // Admin role
  const existingAdminRole = await prisma.role.findFirst({
    where: { name: 'Admin' },
  });

  if (!existingAdminRole) {
    const adminRolePermissions: any = {
      user: { view: true, add: true, edit: true, delete: true },
      resource: { view: true, add: true, edit: true, delete: true },
      category: { view: true, add: true, edit: true, delete: true },
      role: { view: true, add: true, edit: true, delete: true },
    };

    await prisma.role.create({
      data: {
        name: 'Admin',
        description: 'Administrator with full access',
        isActive: true,
        user: adminRolePermissions.user,
        resource: adminRolePermissions.resource,
        category: adminRolePermissions.category,
      },
    });
    console.log('Admin role created');
  }

  // Moderator role
  const existingModeratorRole = await prisma.role.findFirst({
    where: { name: 'Moderator' },
  });

  if (!existingModeratorRole) {
    const moderatorRolePermissions: any = {
      user: { view: true, add: false, edit: false, delete: false },
      resource: { view: true, add: true, edit: true, delete: false },
      category: { view: true, add: true, edit: true, delete: false },
    };

    await prisma.role.create({
      data: {
        name: 'Moderator',
        description: 'Moderator with limited management access',
        isActive: true,
        user: moderatorRolePermissions.user,
        resource: moderatorRolePermissions.resource,
        category: moderatorRolePermissions.category,
      },
    });
    console.log('Moderator role created');
  }

  // User role
  const existingUserRole = await prisma.role.findFirst({
    where: { name: 'User' },
  });

  if (!existingUserRole) {
    const userRolePermissions: any = {
      user: { view: true, add: false, edit: false, delete: false },
      resource: { view: true, add: false, edit: false, delete: false },
      category: { view: true, add: false, edit: false, delete: false },
    };

    await prisma.role.create({
      data: {
        name: 'User',
        description: 'Regular user with view access',
        isActive: true,
        user: userRolePermissions.user,
        resource: userRolePermissions.resource,
        category: userRolePermissions.category,
      },
    });
    console.log('User role created');
  }
}

async function defaultUsers(): Promise<void> {
  try {
    const adminRole = await prisma.role.findFirst({ where: { name: 'Admin' } });
    const userRole = await prisma.role.findFirst({ where: { name: 'User' } });

    if (!adminRole || !userRole) {
      console.log('Roles not found. Please run defaultRoles() first.');
      return;
    }

    // Admin User
    const existingAdminUser = await prisma.user.findUnique({
      where: { email: 'admin@404library.com' },
    });

    if (!existingAdminUser) {
      const adminUser = await auth.api.signUpEmail({
        body: {
          email: 'admin@404library.com',
          password: 'Admin123!',
          name: 'System Administrator',
        },
      });

      if (adminUser.user) {
        await prisma.userRoleuserType.create({
          data: {
            userId: adminUser.user.id,
            userType: userType.ADMIN,
            roleId: adminRole.id,
          },
        });
        console.log('Admin user created');
      }
    }

    // Regular User
    const existingRegularUser = await prisma.user.findUnique({
      where: { email: 'user@404library.com' },
    });

    if (!existingRegularUser) {
      const regularUser = await auth.api.signUpEmail({
        body: {
          email: 'user@404library.com',
          password: 'User123!',
          name: 'Regular User',
        },
      });

      if (regularUser.user) {
        await prisma.userRoleuserType.create({
          data: {
            userId: regularUser.user.id,
            userType: userType.USER,
            roleId: userRole.id,
          },
        });
        console.log('Regular user created');
      }
    }
  } catch (error) {
    console.error('Error creating default users:', error);
    throw error;
  }
}

async function defaultCategories(): Promise<void> {
  const categories = [
    { name: 'Programming', slug: 'programming', description: 'Resources about programming' },
    { name: 'Design', slug: 'design', description: 'Resources about design' },
    { name: 'Business', slug: 'business', description: 'Resources about business' },
  ];

  for (const cat of categories) {
    const existing = await prisma.category.findUnique({ where: { slug: cat.slug } });
    if (!existing) {
      await prisma.category.create({ data: cat });
      console.log(`Category ${cat.name} created`);
    }
  }
}

async function defaultResources(): Promise<void> {
  const resources = [
    {
      name: 'Prisma Documentation',
      url: 'https://www.prisma.io/docs',
      description: 'Official Prisma ORM documentation',
      type: resourceType.LINK,
      tags: ['orm', 'database', 'prisma'],
    },
    {
      name: 'Next.js Documentation',
      url: 'https://nextjs.org/docs',
      description: 'Official Next.js documentation',
      type: resourceType.LINK,
      tags: ['framework', 'react', 'nextjs'],
    },
  ];

  for (const res of resources) {
    const existing = await prisma.resource.findUnique({ where: { url: res.url } });
    if (!existing) {
      await prisma.resource.create({ data: res });
      console.log(`Resource ${res.name} created`);
    }
  }
}

async function main() {
  try {
    await defaultRoles();
    await defaultUsers();
    await defaultCategories();
    await defaultResources();
    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();