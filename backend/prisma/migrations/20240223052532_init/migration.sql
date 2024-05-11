-- CreateTable
CREATE TABLE "Sites" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "tag" TEXT[],
    "githubUrl" TEXT,
    "cat" TEXT NOT NULL,

    CONSTRAINT "Sites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Designs" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameen" TEXT NOT NULL,
    "bgc" TEXT,
    "cover" BOOLEAN NOT NULL,

    CONSTRAINT "Designs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Icon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "src" TEXT NOT NULL,

    CONSTRAINT "Icon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DesignsToIcon" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Sites_url_key" ON "Sites"("url");

-- CreateIndex
CREATE UNIQUE INDEX "_DesignsToIcon_AB_unique" ON "_DesignsToIcon"("A", "B");

-- CreateIndex
CREATE INDEX "_DesignsToIcon_B_index" ON "_DesignsToIcon"("B");

-- AddForeignKey
ALTER TABLE "_DesignsToIcon" ADD CONSTRAINT "_DesignsToIcon_A_fkey" FOREIGN KEY ("A") REFERENCES "Designs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DesignsToIcon" ADD CONSTRAINT "_DesignsToIcon_B_fkey" FOREIGN KEY ("B") REFERENCES "Icon"("id") ON DELETE CASCADE ON UPDATE CASCADE;
