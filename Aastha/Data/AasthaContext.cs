using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aastha.Data
{
    public class AasthaContext:IdentityDbContext
    {
        public AasthaContext(DbContextOptions<AasthaContext> options):base(options)
        {

        }
    }
}
