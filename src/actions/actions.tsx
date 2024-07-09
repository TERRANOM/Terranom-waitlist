// app/actions/actions.ts
"use server";

import prisma from "@/app/lib/db";

export async function addUser(formData: FormData): Promise<boolean> {
  await prisma.user.create({
    data: {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    },
  });
  return true;
}
