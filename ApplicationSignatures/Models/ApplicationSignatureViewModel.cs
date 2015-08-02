using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApplicationSignatures.Models
{
    public class ApplicationSignatureViewModel
    {
        public string Name { get; set; }

        public int ID { get; set; }

        public string Category { get; set; }

        public List<string> Technology { get; set; }

        public int Popularity { get; set; }

        public int Risk { get; set; }

        public string Released { get; set; }

        public string Vendor { get; set; }

        public string Url { get; set; }

        public List<string> References { get; set; }

        public string Impact { get; set; }

        public string Summary { get; set; }

        public string Affected { get; set; }

        public string Action { get; set; }

        public string Coverage { get; set; }
        
        public int PopularityScore { get; set; }

        public string Language { get; set; }
        
        public int DeepAppCtrl { get; set; }
    }
}