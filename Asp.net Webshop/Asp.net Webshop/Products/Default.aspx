<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Asp.net_Webshop.Products.Default" MasterPageFile="~/Master.Master" %>
<asp:Content ID="Content1" runat="server" 
    contentplaceholderid="ContentPlaceHolder1">
    <h2>Kategorien</h2>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:WebshopConnectionString %>" 
        SelectCommand="SELECT * FROM [Categories] ORDER BY [Name]"></asp:SqlDataSource>
    <asp:DataList ID="DataList1" runat="server" DataKeyField="ID" 
        DataSourceID="SqlDataSource1" Width="100%" BackColor="White" 
    BorderColor="#999999" BorderStyle="Solid" BorderWidth="1px" CellPadding="3" 
    ForeColor="Black" GridLines="Vertical">
        <FooterStyle BackColor="#CCCCCC" />
        <AlternatingItemStyle BackColor="#CCCCCC" />
        <SelectedItemStyle BackColor="#000099" Font-Bold="True" ForeColor="White" />
        <HeaderStyle BackColor="Black" Font-Bold="True" ForeColor="White" />
        <ItemTemplate>
        <div>
            &nbsp;<h4>
                <asp:Hyperlink ID="NameLabel" runat="server" Text='<%# Eval("Name") %>' NavigateUrl='Details.aspx?ID={0}' Parameter0=' <%# Eval ("ID") %>' />
            </h4>
            <br />
            <asp:Label ID="DescriptionLabel" runat="server" 
                Text='<%# Eval("Description") %>' />
            </div>
        </ItemTemplate>
    </asp:DataList>
    </asp:Content>
