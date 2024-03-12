import { headers } from "next/headers";
import Link from "next/link";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/products",
    label: "Products",
  },
  {
    href: "/about-us",
    label: "About Us",
  },
];

const Header = () => {
  const headersList = headers();
  const pathname = headersList.get("next-url");

  console.log("pathname", pathname);

  return (
    <header className="p-5 flex items-center">
      <img src="/images/logo.png" alt="Logo" className="w-[5.5rem] h-12" />
      <div className="flex ml-auto gap-4 sm:gap-6 md:gap-8 sm:pr-[5vw]">
        {links.map(({ href, label }) => (
          <Link
            className={twMerge(
              "text-gray-500 hover:text-gray-900 font-[500] transition-colors duration-200",
              pathname === href ? "text-gray-900" : ""
            )}
            key={`${href}${label}`}
            href={href}
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;

/*
host localhost:3000
connection keep-alive
sec-ch-ua "Not A(Brand";v="99", "Opera GX";v="107", "Chromium";v="121"
sec-ch-ua-mobile ?0
user-agent Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 OPR/107.0.0.0
next-url /
sec-ch-ua-platform "Windows"

sec-fetch-site same-origin
sec-fetch-mode cors
sec-fetch-dest empty
referer http://localhost:3000/
accept-encoding gzip, deflate, br
accept-language en-US,en;q=0.9
cookie _ga=GA1.1.1741931051.1706859416; PGADMIN_LANGUAGE=en; _ga_R8WFCE2GTN=GS1.1.1709823735.7.1.1709823961.0.0.0; csrftoken=u7xMWyZlrivAFRYAp8jdEY0pvhbrm1Do; sessionid=d2razusiheqp3dkkvubrbfltjz9ym1k0; accessToken=eyJraWQiOiJJNGZLRXQ5OWJzYmdaNWhna2RuV2xaVlNaQlI3Q0EyZUV6V05SZmpCMGlvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI3N2ZjYzMxZC1hNGU3LTRhNzgtYmRkNC05YzBkMzI1YzE0NmUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtM184d1VaVDFiZXgiLCJjbGllbnRfaWQiOiI2bG1mYWNmdW8wZnZpMGFmOWpiNTFzazhqbyIsIm9yaWdpbl9qdGkiOiJjY2MyZTc3MS0wODNmLTQ5MTYtOTg2Yy03ZGI5YTE5ZTM5MzYiLCJldmVudF9pZCI6IjFkMzdlMzljLWE3YzItNDM2YS04OGZlLTk5ZWVkMDNjOWVmNyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MTAxNDk0MjYsImV4cCI6MTcxMDMyMjI3OSwiaWF0IjoxNzEwMjM1ODgwLCJqdGkiOiJkNjM2ODAxOS05Y2ZmLTRmNzMtYTU3Ni1mODViOGYyZWM1ZTAiLCJ1c2VybmFtZSI6Ijc3ZmNjMzFkLWE0ZTctNGE3OC1iZGQ0LTljMGQzMjVjMTQ2ZSJ9.t-HToHPWLEcWeGtqywrGjK9KPqttFaDz6Zn3TZYJUA5e2y7UsARK7XOdveYHiz-liw0EkQBSvcIaidn1aoqU__f3rSOvgrO9RudUyWUDFIbHdIvFzeRWFggzTkd5yZpK5IcjBmy8yj9DolPzjr_fJMoFY2F4hLNDQkXbOqwgZtQHBMAC-cJRNHfy9GLYudKok0zNTHAThAeZqNYBiYS26reqzL92MFRnPoAyZUKoTnYXt_EuLMYE1dX5Q4vic-CEK5ZFltgjvq1vFIA9n4KdcJ9uYMRzFY0gD8dM8uR2-TAbAIkFp7v2lrkH6daONkk7bzxPNpiShOtTXMwUeAbthg; refreshToken=undefined
x-forwarded-host localhost:3000
x-forwarded-port 3000
x-forwarded-proto http
x-forwarded-for ::1

*/
