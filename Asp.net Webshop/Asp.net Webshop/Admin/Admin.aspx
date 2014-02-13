<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Admin.aspx.cs" Inherits="Asp.net_Webshop.Admin.Admin" MasterPageFile="~/Master.Master" %>

<%@ Register Assembly="CuteEditor" Namespace="CuteEditor" TagPrefix="CE" %>

<asp:Content ID="Content1" runat="server" 
    contentplaceholderid="ContentPlaceHolder1">
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:WebshopConnectionString %>" 
        SelectCommand="SELECT * FROM [Products]"></asp:SqlDataSource>
    <asp:GridView ID="GridView1" runat="server" Width="100%" AllowPaging="True" 
        AllowSorting="True" AutoGenerateColumns="False" DataKeyNames="ID" 
        DataSourceID="SqlDataSource1">
        <Columns>
            <asp:HyperLinkField DataNavigateUrlFields="ID" 
                DataNavigateUrlFormatString="~/admin/Editor.aspx?edit={0}&amp;type=product" 
                DataTextField="Name" HeaderText="Name" />
            <asp:BoundField DataField="Description" HeaderText="Beschreibung" 
                SortExpression="Description" />
            <asp:BoundField DataField="Price" HeaderText="Preis" SortExpression="Price" />
            <asp:CheckBoxField DataField="Enabled" HeaderText="Verfügbar" 
                SortExpression="Enabled" />
            <asp:BoundField DataField="Quantity" HeaderText="Verfügbare Stückzahl" 
                SortExpression="Quantity" />
            <asp:BoundField DataField="CategoryID" HeaderText="Kategorie" 
                SortExpression="CategoryID" />
        </Columns>
    </asp:GridView>
</asp:Content>
