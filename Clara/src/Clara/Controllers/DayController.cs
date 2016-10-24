using Clara.Models;
using Microsoft.AspNetCore.Mvc;

namespace Clara.Controllers
{
    public class DayController : Controller
    {
        [Route("/{id}")]
        public IActionResult Get(int id)
        {
            return NotFound();
        }

        [HttpPost]
        public IActionResult Post([FromBody] Day day)
        {
            return NotFound();
        }

        [HttpPut]
        [Route("/{id}")]
        public IActionResult Put(int id, [FromBody] Day day)
        {
            return NotFound();
        }

        [HttpDelete]
        [Route("/{id}")]
        public IActionResult Delete(int id)
        {
            return NotFound();
        }
    }
}
