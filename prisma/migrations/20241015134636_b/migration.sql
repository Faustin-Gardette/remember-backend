-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "learnSectionId" INTEGER;

-- CreateTable
CREATE TABLE "LearnSection" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "LearnSection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_learnSectionId_fkey" FOREIGN KEY ("learnSectionId") REFERENCES "LearnSection"("id") ON DELETE SET NULL ON UPDATE CASCADE;
