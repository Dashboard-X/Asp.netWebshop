using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Asp.net_Webshop.Code
{
    public class DatabaseProvider : SiteMapProvider
    {
        public override SiteMapNode FindSiteMapNode(string rawUrl)
        {
            throw new NotImplementedException();
        }

        public override SiteMapNodeCollection GetChildNodes(SiteMapNode node)
        {
            throw new NotImplementedException();
        }

        public override SiteMapNode GetParentNode(SiteMapNode node)
        {
            throw new NotImplementedException();
        }

        protected override SiteMapNode GetRootNodeCore()
        {
            throw new NotImplementedException();
        }
    }
}
