using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace hrmapps.coreapi.Models
{
  public class ChangePasswordDTO
  {
    public Guid UserId { get; set; }
    public string UserName { get; set; }
    [Required]
    public string OldPassword { get; set; }
    [Required]
    public string NewPassword { get; set; }
    public int LoginId { get; set; }
    public string PasswordHash { get; set; }
    public Guid CreatedBy { get; set; }
    public Guid? LastUpdatedBy { get; set; }
    public int MaximumRetainPassword { get; set; }
    public int CountPwds { get; set; }
    public int PwdHisId { get; set; }
    public DateTime Date { get; set; }


  }
}
