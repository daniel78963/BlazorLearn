namespace Blazor.Model.LearnBlazor
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string ImageUrl { get; set; } = string.Empty;
        public bool IsActive { get; set; }
        // Navigation property for related Product_Prop entities
        //public List<Product_Prop> Properties { get; set; } = new List<Product_Prop>();
        public IEnumerable<Product_Prop> ProductProperties { get; set; } = new List<Product_Prop>();
    }
}
