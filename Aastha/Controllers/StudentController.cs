using System.Threading.Tasks;
using Aastha.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Aastha.Controllers
{
    public class StudentController : Controller
    {
        private readonly AasthaContext _context;

        public StudentController(AasthaContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            var students = await _context.Student_Master.ToListAsync();
            return View(students);
        }

        public IActionResult Create()
        {
            return View();
        }
        public IActionResult Edit(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var student = _context.Student_Master.Find(id);
            return View(student);
        }
    }
}