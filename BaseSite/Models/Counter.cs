using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;


namespace BaseSite.Models
{
    [DataContract]
    public class Counter
    {
        [DataMember]
        internal int currentNumber;
    }
}