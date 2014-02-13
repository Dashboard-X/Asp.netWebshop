using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Asp.net_Webshop.Admin
{
    public enum Status
    {
        EditProduct,
        NewProduct,
        EditSite
    }

    public partial class Editor : System.Web.UI.Page
    {
        Status EditStatus = Status.EditProduct;
        string ProductGuid = "";
        WebshopDataSetTableAdapters.ProductsTableAdapter productTable =
            new Asp.net_Webshop.WebshopDataSetTableAdapters.ProductsTableAdapter();

        protected void Page_Load(object sender, EventArgs e)
        {
            string x = Request.QueryString["type"];
            if (x == "product")
            {
                EditStatus = Status.EditProduct;
                ProductGuid = Request.QueryString["edit"];
                if (ProductGuid != "new")
                {
                    TextBox1.Text = productTable.GetDataByID(
                        new Guid(Request.QueryString["edit"]))[0].Name.ToString();
                    Editor1.Text = productTable.GetDataByID(
                        new Guid(Request.QueryString["edit"]))[0].Description.ToString();
                }
                else
                {
                    EditStatus = Status.NewProduct;
                }
            }
            if (Request.QueryString["type"] == "site")
            {
                EditStatus = Status.EditSite;
            }
        }

        public void Button1_OnClick(object sender, EventArgs e)
        {
            if (EditStatus == Status.EditProduct)
            {
                // Produkt speichern
            }

            if (EditStatus == Status.NewProduct)
            {
                productTable.Insert(Guid.NewGuid(), TextBox1.Text, Editor1.Text,
                    decimal.Parse(TextBox2.Text), CheckBox1.Checked, 0,
                    new Guid("a5446f1e-7ca6-4d38-9e38-06f2139620ec"));
            }
        }
    }
}
