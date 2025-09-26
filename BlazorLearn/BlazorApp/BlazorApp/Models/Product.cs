using System.ComponentModel.DataAnnotations;

namespace BlazorApp.Models
{
    public class Product
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        [Range(1, 1000)]
        public decimal Price { get; set; }
        public string ImageUrl { get; set; } = string.Empty;
        public bool IsActive { get; set; }
        // Navigation property for related Product_Prop entities
        //public List<Product_Prop> Properties { get; set; } = new List<Product_Prop>();
        public IEnumerable<Product_Prop> ProductProperties { get; set; } = new List<Product_Prop>();

        public Category Category { get; set; }
        public DateOnly AvailableAfter { get; set; }
    }

    public enum Category
    {
        Entree,
        Appetizer,
        Dessert,
        Electronics,
        Books,
        Clothing,
        Home,
        Sports
    }
}
