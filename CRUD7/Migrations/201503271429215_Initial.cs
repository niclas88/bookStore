namespace CRUD7.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.authors",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.books",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        title = c.String(nullable: false),
                        description = c.String(),
                        year = c.Int(nullable: false),
                        stock = c.Int(nullable: false),
                        isbn = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.genres",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        name = c.String(nullable: false),
                        description = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.images",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        imageUrl = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.ratings",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        rate = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.bookauthors",
                c => new
                    {
                        book_Id = c.Int(nullable: false),
                        author_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.book_Id, t.author_Id })
                .ForeignKey("dbo.books", t => t.book_Id, cascadeDelete: true)
                .ForeignKey("dbo.authors", t => t.author_Id, cascadeDelete: true)
                .Index(t => t.book_Id)
                .Index(t => t.author_Id);
            
            CreateTable(
                "dbo.genrebooks",
                c => new
                    {
                        genre_Id = c.Int(nullable: false),
                        book_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.genre_Id, t.book_Id })
                .ForeignKey("dbo.genres", t => t.genre_Id, cascadeDelete: true)
                .ForeignKey("dbo.books", t => t.book_Id, cascadeDelete: true)
                .Index(t => t.genre_Id)
                .Index(t => t.book_Id);
            
            CreateTable(
                "dbo.imagebooks",
                c => new
                    {
                        image_Id = c.Int(nullable: false),
                        book_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.image_Id, t.book_Id })
                .ForeignKey("dbo.images", t => t.image_Id, cascadeDelete: true)
                .ForeignKey("dbo.books", t => t.book_Id, cascadeDelete: true)
                .Index(t => t.image_Id)
                .Index(t => t.book_Id);
            
            CreateTable(
                "dbo.ratingbooks",
                c => new
                    {
                        rating_Id = c.Int(nullable: false),
                        book_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.rating_Id, t.book_Id })
                .ForeignKey("dbo.ratings", t => t.rating_Id, cascadeDelete: true)
                .ForeignKey("dbo.books", t => t.book_Id, cascadeDelete: true)
                .Index(t => t.rating_Id)
                .Index(t => t.book_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ratingbooks", "book_Id", "dbo.books");
            DropForeignKey("dbo.ratingbooks", "rating_Id", "dbo.ratings");
            DropForeignKey("dbo.imagebooks", "book_Id", "dbo.books");
            DropForeignKey("dbo.imagebooks", "image_Id", "dbo.images");
            DropForeignKey("dbo.genrebooks", "book_Id", "dbo.books");
            DropForeignKey("dbo.genrebooks", "genre_Id", "dbo.genres");
            DropForeignKey("dbo.bookauthors", "author_Id", "dbo.authors");
            DropForeignKey("dbo.bookauthors", "book_Id", "dbo.books");
            DropIndex("dbo.ratingbooks", new[] { "book_Id" });
            DropIndex("dbo.ratingbooks", new[] { "rating_Id" });
            DropIndex("dbo.imagebooks", new[] { "book_Id" });
            DropIndex("dbo.imagebooks", new[] { "image_Id" });
            DropIndex("dbo.genrebooks", new[] { "book_Id" });
            DropIndex("dbo.genrebooks", new[] { "genre_Id" });
            DropIndex("dbo.bookauthors", new[] { "author_Id" });
            DropIndex("dbo.bookauthors", new[] { "book_Id" });
            DropTable("dbo.ratingbooks");
            DropTable("dbo.imagebooks");
            DropTable("dbo.genrebooks");
            DropTable("dbo.bookauthors");
            DropTable("dbo.ratings");
            DropTable("dbo.images");
            DropTable("dbo.genres");
            DropTable("dbo.books");
            DropTable("dbo.authors");
        }
    }
}
