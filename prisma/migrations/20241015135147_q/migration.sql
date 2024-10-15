/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `LearnSection` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `LearnSection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LearnSection" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "LearnSection_userId_key" ON "LearnSection"("userId");

-- AddForeignKey
ALTER TABLE "LearnSection" ADD CONSTRAINT "LearnSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
