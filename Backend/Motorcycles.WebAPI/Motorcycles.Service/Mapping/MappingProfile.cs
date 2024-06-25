using AutoMapper;
using Motorcycles.Model;
using Motorcycles.Service.Common.DTOs;

namespace Motorcycles.Service.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Motorcycle, MotorcycleDTO>();
            CreateMap<MotorcycleDTO, Motorcycle>().ForMember(p => p.Id, opt => opt.Ignore());
                }
    }
}