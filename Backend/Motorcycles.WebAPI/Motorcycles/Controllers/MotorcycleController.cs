using Microsoft.AspNetCore.Mvc;
using Motorcycles.Service.Common;
using Motorcycles.Service.Common.DTOs;

namespace Motorcycles.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MotorcycleController : ControllerBase
    {
        private readonly IMotorcycleService _motorcycleService;

        public MotorcycleController(IMotorcycleService motorcycleService)
        {
            _motorcycleService = motorcycleService;
        }

        [HttpPost("AddMotorcycle")]
        public async Task<IActionResult> AddMotorcycleAsync([FromBody] MotorcycleDTO motorcycleDto)
        {
            if (motorcycleDto == null)
            {
                return BadRequest("Motorcycle data is null.");
            }

            try
            {
                await _motorcycleService.AddMotorcycleAsync(motorcycleDto);
                return Ok("Motorcycle added successfully.");
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }

        [HttpPut("UpdateMotorcycle/{id}")]
        public async Task<IActionResult> UpdateMotorcycleAsync(int id, [FromBody] MotorcycleDTO motorcycleDto)
        {
            if (motorcycleDto == null || motorcycleDto.Id == 0)
            {
                return BadRequest("Invalid motorcycle data.");
            }

            try
            {
                await _motorcycleService.UpdateMotorcycleAsync(motorcycleDto);
                return Ok("Motorcycle updated successfully.");
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }

        [HttpDelete("DeleteMotorcycle/{id}")]
        public async Task<IActionResult> DeleteMotorcycleAsync(int id)
        {
            if (id == 0)
            {
                return BadRequest("Invalid motorcycle ID.");
            }

            try
            {
                await _motorcycleService.DeleteMotorcycleAsync(id);
                return Ok($"Motorcycle with Id = {id} deleted successfully.");
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }

        [HttpGet("GetMotorcycleById/{id}")]
        public async Task<IActionResult> GetMotorcycleAsync(int id)
        {
            if (id == 0)
            {
                return BadRequest("Invalid motorcycle ID.");
            }

            try
            {
                var motorcycle = await _motorcycleService.GetMotorcycleAsync(id);
                if (motorcycle != null)
                {
                    return Ok(motorcycle);
                }
                else
                {
                    return NotFound($"Motorcycle with Id = {id} not found.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }

        [HttpGet("GetMotorcycles")]
        public async Task<IActionResult> GetMotorcyclesAsync()
        {
            try
            {
                var motorcycles = await _motorcycleService.GetMotorcyclesAsync();
                if (motorcycles != null)
                {
                    return Ok(motorcycles);
                }
                else
                {
                    return NotFound("Motorcycles not found.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }
    }
}
