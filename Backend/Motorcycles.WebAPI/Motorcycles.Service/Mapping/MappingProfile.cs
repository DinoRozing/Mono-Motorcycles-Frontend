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
            CreateMap<MotorcycleDTO, Motorcycle>()
            .ForMember(dest => dest.IsDeleted, opt => opt.Ignore())
            .ForMember(dest => dest.DateCreated, opt => opt.Ignore()) 
            .ForMember(dest => dest.DateUpdated, opt => opt.Ignore());
        }
    }
}