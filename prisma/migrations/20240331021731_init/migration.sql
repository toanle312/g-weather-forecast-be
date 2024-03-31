-- CreateTable
CREATE TABLE "VerifiedEmail" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "verifiedAt" TIMESTAMP(3),

    CONSTRAINT "VerifiedEmail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VerifiedEmail_email_key" ON "VerifiedEmail"("email");
