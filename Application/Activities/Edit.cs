using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace Application.Activities
{
    public class Edit
    {
        public class Command: IRequest
        {
            public Activity Activity{get; set;}
        }

        public class Handler  : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper )
            {
                _mapper = mapper;
                _context = context;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Activity.Id);
                _mapper.Map(request.Activity, activity);
                //activity.Title = request.Activity.Title ?? activity.Title;

                await _context.SaveChangesAsync();
                
                return Unit.Value;
            }
        }
    }
}