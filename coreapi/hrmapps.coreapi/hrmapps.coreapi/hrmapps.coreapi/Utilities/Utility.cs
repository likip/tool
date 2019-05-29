using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace hrmapps.coreapi.Utilities
{
    public class Utility
    {
    public static string DecryptCode(string userName)
    {
      string base64Decoded;
      byte[] data = System.Convert.FromBase64String(userName);
      base64Decoded = System.Text.ASCIIEncoding.ASCII.GetString(data);
      return base64Decoded;
    }

    public static string RandomString(int size)
    {
      StringBuilder builder = new StringBuilder();
      Random random = new Random();
      char ch;
      for (int i = 0; i < size; i++)
      {
        ch = Convert.ToChar(Convert.ToInt32(Math.Floor(26 * random.NextDouble() + 65)));
        builder.Append(ch);
      }

      return builder.ToString();
    }

    public static string GeneratePasswordHash(string password)
    {
      byte[] salt;
      new RNGCryptoServiceProvider().GetBytes(salt = new byte[16]);
      var ppkdf2 = new Rfc2898DeriveBytes(password, salt, 1000);
      byte[] hash = ppkdf2.GetBytes(20);
      byte[] hashbytes = new byte[36];

      // Copy the salt value & password hash value
      Array.Copy(salt, 0, hashbytes, 0, 16);
      Array.Copy(hash, 0, hashbytes, 16, 20);

      return Convert.ToBase64String(hashbytes);
    }

    public static bool ComparePasswordHash(string passwordHash, string password)
    {
      bool result = true;
      byte[] passwordValue = Convert.FromBase64String(passwordHash);
      byte[] salt = new byte[16];
      Array.Copy(passwordValue, 0, salt, 0, 16);

      var ppkdf2 = new Rfc2898DeriveBytes(password, salt, 1000);
      byte[] hash = ppkdf2.GetBytes(20);


      for (int i = 0; i < 20; i++)
      {
        if (passwordValue[i + 16] != hash[i])
        {
          result = false;
          return result;
        }
      }

      return result;
    }

    public static string DecodeJTWToken(string token)
    {
      var JTWtoken = new JwtSecurityToken(jwtEncodedString: token);
      string emailID = JTWtoken.Claims.First(x => x.Type == "upn").Value;
      return (emailID != null) ? (emailID.Split("@"))[0] : string.Empty;
    }

    public static string ResetDecodeJTWToken(string token)
    {
      var JTWtoken = new JwtSecurityToken(jwtEncodedString: token);
      //string name = JTWtoken.Claims.Select(x => x.Value).FirstOrDefault();
      //return (name != null) ? (name.Split("@"))[0] : string.Empty;
      string value = JTWtoken.Claims.Select(x => x.Value).FirstOrDefault();
      return value;
    }
  }
}
