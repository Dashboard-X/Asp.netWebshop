<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Admin.aspx.cs" Inherits="Asp.net_Webshop.Admin" MasterPageFile="~/Master.Master" %>

<%@ Register Assembly="CuteEditor" Namespace="CuteEditor" TagPrefix="CE" %>

<asp:Content ID="Content1" runat="server" 
    contentplaceholderid="ContentPlaceHolder1">
    <asp:HyperLink ID="HyperLink1" NavigateUrl="~/Admin.aspx?edit=default" runat="server">Startseite aufrufen</asp:HyperLink>
    <br />
    <asp:HyperLink ID="HyperLink2" NavigateUrl="~/Admin.aspx?edit=about" runat="server">"Über uns" bearbeiten</asp:HyperLink>  
    <br />
</asp:Content>
