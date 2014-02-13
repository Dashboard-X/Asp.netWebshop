<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Editor.aspx.cs" Inherits="Asp.net_Webshop.Admin.Editor" MasterPageFile="~/Master.Master" %>

<%@ Register Assembly="CuteEditor" Namespace="CuteEditor" TagPrefix="CE" %>
<asp:Content ID="Content1" runat="server" 
    contentplaceholderid="ContentPlaceHolder1">

    <asp:Label ID="Label1" runat="server" Text="Titel:" />
    <asp:TextBox ID="TextBox1" runat="server" />
    <br />
    <asp:Label ID="Label2" runat="server" Text="Beschreibung:" />
    <CE:Editor ID="Editor1" runat="server" />
    <br />
    <!--
    <asp:Label ID="Label3" runat="server" Text="Verfügbare Stückzahl" />
    <br />
    -->
    <asp:CheckBox ID="CheckBox1" runat="server" Text="Verfügbar" />
    <br />
    <asp:Label ID="Label4" runat="server" Text="Preis" />
    <asp:TextBox ID="TextBox2" runat="server" />
    <br />
    <asp:Label ID="Label5" runat="server" Text="Kategorie" />
    <asp:ListBox ID="ListBox1" runat="server"  />
    <br />
    <asp:Button ID="Button1" runat="server" Text="Speichern" OnClick="Button1_OnClick" />
</asp:Content>
