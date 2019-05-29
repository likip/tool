using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace hrmapps.coreapi.Models
{
  public class LoginDTO
  {
    public Guid UserId { get; set; }
    [Required]
    public string UserName { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int RoleId { get; set; }
    public string RoleName { get; set; }
    [Required]
    public string Password { get; set; }
    [JsonIgnore]
    public string PasswordHash { get; set; }
    public int LoginTypeId { get; set; }
    public string LoginTypeName { get; set; }
    public bool EulaResult { get; set; }
    public int LanguageId { get; set; }
    public string LanguageDesc { get; set; }
    public string LanguageCode { get; set; }
    public int IncorrectPasswordAttempt { get; set; }
    public bool IsLocked { get; set; }
    public bool ChangePasswordOnNextLogin { get; set; }
    public DateTime LastPwdChangedOn { get; set; }
    public int PasswordExpiryDuration { get; set; }
    public int DateDiff { get; set; }
    public int IncorrectPasswordAttemptConfig { get; set; }
    public string AuthenticationToken { get; set; }
    public string AuthorizationToken { get; set; }
  }
}
