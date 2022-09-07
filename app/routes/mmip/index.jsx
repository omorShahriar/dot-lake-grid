import { Container } from "~/components/Container";
import { LinkIcon } from "~/components/Icons";

const ScrollToLink = ({ to, children }) => {
  return (
    <a className="  flex  gap-x-2  scroll-smooth " href={to}>
      <h2 className="text-2xl leading-[inherit]"> {children}</h2>

      <LinkIcon className="text-white w-6 h-6 " />
    </a>
  );
};

const UnderlineLink = ({ children, to }) => {
  return (
    <a
      className=" underline decoration-solid "
      href={to}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

const Heading = ({ children }) => {
  return <h2 className="mb-8 text-5xl text-white">{children}</h2>;
};
const P = ({ children }) => {
  return <h2 className="text-xl text-white">{children}</h2>;
};

const FlexList = ({ children }) => {
  return <ul className=" pl-8 flex flex-col gap-y-1  ">{children}</ul>;
};
export default function Screen() {
  return (
    <div>
      <section className=" lg:bg-blend-overlay lg:bg-black/20 lg:bg-[url(/mmip-hero.png)] bg-cover bg-top bg-dotOrange mt-44 lg:mt-0  ">
        <div className="flex items-center justify-center lg:pt-96 lg:pb-72 pb-20 pt-[120px] relative ">
          <div className=" absolute lg:hidden  inset-0  mx-4 ">
            <img
              src="/mmip-hero.png"
              alt="archive mobile hero"
              className=" h-full object-center "
            />
            <div className="bg-black/20 absolute inset-0 z-10"></div>
          </div>
          <h1 className=" text-white lg:text-7xl text-[52px] text-center relative z-20  ">
            Missing & Murdered Indigenous People
          </h1>
        </div>
      </section>
      <section>
        <Container>
          <div className="  mt-32">
            <Heading>MMIP</Heading>
            <P>
              This page is intended to be used as a tool for families of loved
              ones that are missing or murdered. Savanna’s Act was passed to
              address the crisis of missing and murdered indigenous people in
              the United States. Alaska, as you know, has many missing or
              murdered native people and Alaska Natives are the victims of
              violent crimes at a rate disproportionate to their population.
              These guidelines represent a concerted effort to continue to
              develop and improve the response to cases of missing or murdered
              Indigenous people within the state.
            </P>
          </div>
          <div>
            <a
              className=" flex gap-x-6 text-white mt-48 mb-8"
              href="https://www.justice.gov/tribal/mmip/SavannasAct"
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="text-5xl leading-[inherit]"> Savanna’s Act</h2>

              <LinkIcon className="w-12 h-12" />
            </a>
            <P>
              This document is prepared at the direction of Congress consistent
              with the provisions of Savanna’s Act (25 U.S.C. §§ 5701-5705), and
              Alaska’s guidelines were developed after hundreds of hours of
              consultations with stakeholders. The goals and requirements of the
              Act are set forth below, and Sections I-VI contain the policies
              and procedures required by the Act.
            </P>
          </div>

          <div className=" flex justify-between  mx-16 my-48  text-white top-24 relative  ">
            <ScrollToLink to="#mmip-toolkits">MMIP Toolkits</ScrollToLink>
            <ScrollToLink to="#avcp-region">AVCP Region</ScrollToLink>
            <ScrollToLink to="#state-of-alaska">State of Alaska</ScrollToLink>
            <ScrollToLink to="#national">National</ScrollToLink>
          </div>
          <div className="flex flex-col gap-y-32">
            {" "}
            <div id="mmip-toolkits" className=" scroll-mt-36 ">
              <Heading>MMIP Toolkits</Heading>
              <P>
                <FlexList>
                  <li>
                    {" "}
                    Missing and Murdered Indigenous Women:
                    <UnderlineLink to="https://www.aknwrc.org/resources/aknwrc-resources/mmiwresources/">
                      An Action Plan for Alaska Native Communities
                    </UnderlineLink>
                  </li>
                  <li>
                    {" "}
                    Missing and Murdered Native Americans:
                    <UnderlineLink
                      to="https://www.acf.hhs.gov/sites/default/files/documents/ana/ACF%20Framework%20
              --%20November%202%202020%20w%20signatures%201-20-
              21%20FINAL%20v2.pdf"
                    >
                      A Public Health Framework for Action
                    </UnderlineLink>
                  </li>
                  <li>
                    {" "}
                    <UnderlineLink to="https://www.niwrc.org/resources/toolkit/mmiw-toolkit-families-and-communities">
                      MMIW Toolkit for Families and Communities
                    </UnderlineLink>
                  </li>
                  <li>
                    MMIWG:
                    <UnderlineLink
                      to="https://2a840442-f49a-45b0-b1a1-
              7531a7cd3d30.filesusr.com/ugd/6b33f7_2585fecaf9294450a595509cb701e7af.pdf"
                    >
                      We Demand More Urban Indian Health Institute MMIWG2 & MMIP
                      Organizing Toolkit
                    </UnderlineLink>
                  </li>
                  <li>
                    NWIRC Special Collection:
                    <UnderlineLink to="https://www.niwrc.org/resources/special-collection/special-collection-mmiwg">
                      Missing and Murdered Indigenous Women and Girls
                    </UnderlineLink>
                  </li>
                  <li>
                    We Are Calling to You:
                    <UnderlineLink to="https://dataforindigenousjustice.com/we-are-calling-to-you/">
                      Alaska’s Missing and Murdered Women and Girls
                    </UnderlineLink>
                  </li>
                  <li>
                    When a Loved One Goes Missing:
                    <UnderlineLink to="https://operationladyjustice.usdoj.gov/missing-loved-one-guide">
                      Resources for Families of Missing American Indian and
                      Alaska Native Adults (usdoj.gov)
                    </UnderlineLink>
                  </li>
                  <li>
                    When a Loved One Goes Missing:
                    <UnderlineLink
                      to="https://www.niwrc.org/resources/pocket-guide/when-loved-one-goes-missingunderstanding-
              and-responding-crisis-missing-and"
                    >
                      Understanding and Responding to the Crisis of Missing and
                      Murdered Indigenous Women
                    </UnderlineLink>
                  </li>
                </FlexList>
              </P>
            </div>
            <div id="avcp-region" className=" scroll-mt-36 ">
              <Heading>AVCP REGION:</Heading>
              <div className="text-white text-xl flex flex-col gap-y-8 ">
                <FlexList>
                  <li>Association of Village Council Presidents</li>
                  <li>
                    <UnderlineLink to="https://www.avcp.org">
                      www.avcp.org
                    </UnderlineLink>
                  </li>
                  <li>907-543-7300</li>
                  <li>info@avcp.org</li>
                  <li>
                    Healthy Families Program{" "}
                    <UnderlineLink to="https://www.avcp.org/healthy-families-workshops">
                      www.avcp.org/healthy-families-workshops
                    </UnderlineLink>
                  </li>
                  <li>Prevention Unit 907-543-8677</li>
                  <li>
                    <UnderlineLink to="www.kusko.net/bsar/">
                      Bethel Search and Rescue
                    </UnderlineLink>
                  </li>
                  <li>907-545-HELP (907-545-4357)</li>
                </FlexList>
                <FlexList>
                  <li>Emmonak Women’s Shelter</li>
                  <li>
                    <UnderlineLink to="https://www.emmonakshelter.org">
                      www.emmonakshelter.org
                    </UnderlineLink>
                  </li>
                  <li>907-949-1443</li>
                  <li>info@emmonakshelter.org</li>
                </FlexList>
                <FlexList>
                  <li>Tundra Women’s Coalition</li>
                  <li>
                    <UnderlineLink to="https://www.tundrapeace.org">
                      www.tundrapeace.org
                    </UnderlineLink>
                  </li>
                  <li>907-543-3456 or 1-800-478-7799</li>
                </FlexList>
                <FlexList>
                  <li>Yup’ik Women’s Coalition</li>
                  <li>
                    <UnderlineLink to="https://www.yupikwomen.org">
                      www.yupikwomen.org
                    </UnderlineLink>
                  </li>
                  <li>907-949-6252</li>
                  <li>Lynn_YWC@yahoo.com</li>
                </FlexList>
              </div>
            </div>
            <div id="state-of-alaska" className=" scroll-mt-36 ">
              <Heading>STATE OF ALASKA:</Heading>
              <div className="text-white text-xl flex flex-col gap-y-8 ">
                <FlexList>
                  <li>
                    Abused Women’s Aid in Crisis (AWAIC) – an Anchorage based
                    nonprofit shelter
                  </li>

                  <li>Abused Women's Aid in Crisis (AWAIC)</li>
                  <li>907-279-9851</li>
                </FlexList>
                <FlexList>
                  <li>
                    Alaska Bureau of Investigations Missing Persons
                    Clearinghouse (MPC)
                  </li>
                  <li>
                    Missing Person - ABI - AST - Alaska Department of Public
                    Safety
                  </li>
                  <li>907-269-5038</li>
                  <li>malia.miller@alaska.gov</li>
                </FlexList>
                <FlexList>
                  <li>
                    Alaska’s Council on Domestic Violence & Sexual Assault
                  </li>
                  <li>
                    <UnderlineLink to="https://dps.alaska.gov/cdvsa/home">
                      dps.alaska.gov/cdvsa/home
                    </UnderlineLink>
                  </li>
                  <li>907-465-5503</li>
                  <li>Diane.Casto@alaska.gov</li>
                </FlexList>
                <FlexList>
                  <li>Alaska Department of Justice MMIP Coordinator</li>
                  <li>Ingrid Cumberlidge</li>
                  <li>
                    <UnderlineLink to="https://www.justice.gov/usao-ak">
                      www.justice.gov/usao-ak
                    </UnderlineLink>
                  </li>
                  <li>907-271-3314</li>
                  <li>ingrid.cumberlidge@usdoj.gov</li>
                  <li>
                    Alaska Family Services Domestic Violence & Sexual Assault
                    Services
                  </li>
                  <li>
                    {" "}
                    <UnderlineLink to="https://www.akafs.org">
                      www.akafs.org
                    </UnderlineLink>
                  </li>
                  <li>24-hour hotline 907-746-8026</li>
                  <li>courtadvocate@akafs.org</li>
                </FlexList>
                <FlexList>
                  <li>Alaska Native Justice Center</li>
                  <li>
                    <UnderlineLink to="https://www.anjc.org">
                      www.anjc.org
                    </UnderlineLink>
                  </li>
                  <li>907-793-3550</li>
                  <li>anjcinfo@anjc.net</li>
                </FlexList>
                <FlexList>
                  <li>
                    Alaska Native Tribal Health Consortium Domestic Violence
                    Prevention
                  </li>
                  <li>
                    Domestic Violence Prevention | Alaska Native Tribal Health
                    Consortium (anthc.org)
                  </li>
                  <li>907-729-3795</li>
                  <li>dvprevention@anthc.org</li>
                  <li>Alaska Native Tribal Health Consortium</li>
                  <li>
                    Resources Relating to Missing and Murdered Indigenous
                    Persons
                  </li>
                </FlexList>
                <FlexList>
                  <li>Alaska Native Women’s Resource Center</li>
                  <li>
                    <UnderlineLink to="https://www.aknwrc.org">
                      www.aknwrc.org
                    </UnderlineLink>
                  </li>
                  <li>907-328-3990</li>
                  <li>
                    TOOLKIT: Missing and Murdered Indigenous Women: An Action
                    Plan for Alaska Native Communities
                  </li>
                </FlexList>
                <FlexList>
                  <li>Alaska Network on Domestic Violence & Sexual Assault</li>
                  <li>
                    <UnderlineLink to="https://www.andvsa.org">
                      www.andvsa.org
                    </UnderlineLink>
                  </li>
                  <li>907-586-3650</li>
                  <li>andvsa@andvsa.org</li>
                </FlexList>
                <FlexList>
                  <li>Alaska Office of Victim’s Rights</li>
                  <li>
                    <UnderlineLink to="https://www.ovr.akleg.gov">
                      www.ovr.akleg.gov
                    </UnderlineLink>
                  </li>
                  <li>907-754-3460</li>
                  <li>officeofvictimsrights@akleg.gov</li>
                </FlexList>
                <FlexList>
                  <li>Alaska State Troopers</li>
                  <li>
                    <UnderlineLink to="https://dps.alaska.gov/Home">
                      dps.alaska.gov/Home
                    </UnderlineLink>
                  </li>
                  <li>907-269-5511</li>
                  <li>Data for Indigenous Justice</li>
                  <li>
                    <UnderlineLink to="https://www.dataforindigenousjustice.com">
                      www.dataforindigenousjustice.com
                    </UnderlineLink>
                  </li>
                  <li>info@dataforindigenousjustice.com</li>
                  <li>
                    Report: We Are Calling to You: Alaska’s Missing and Murdered
                    Womxn and Girls
                  </li>
                </FlexList>
                <FlexList>
                  <li>MMIWG2S Alaska</li>
                  <li>
                    <UnderlineLink to="https://www.facebook.com/MMIWG2SAlaska">
                      www.facebook.com/MMIWG2SAlaska
                    </UnderlineLink>
                  </li>
                </FlexList>
                <FlexList>
                  <li>Native Peoples Action</li>
                  <li>
                    <UnderlineLink to="https://www.nativepeoplesaction.org">
                      www.nativepeoplesaction.org
                    </UnderlineLink>
                  </li>
                  <li>907-917-0854</li>
                  <li>info@nativepeoplesaction.org</li>
                </FlexList>
                <FlexList>
                  <li>Native Movement</li>
                  <li>
                    <UnderlineLink to="https://www.nativemovement.org/gender-justice ">
                      www.nativemovement.org/gender-justice
                    </UnderlineLink>
                  </li>
                  <li>907-328-0582</li>
                </FlexList>
                <FlexList>
                  <li>
                    Priceless (Working with human trafficking victims and
                    survivors in Alaska){" "}
                  </li>
                  <li>
                    <UnderlineLink to="https://www.pricelessalaska.org">
                      www.pricelessalaska.org
                    </UnderlineLink>
                  </li>
                  <li>Survivor Hotline 907-250-2926</li>
                </FlexList>
                <FlexList>
                  <li>
                    Sex Offender Registry – sex offenders required by law to
                    register with the State of Alaska
                  </li>
                  <li>Sex Offender Registry</li>
                  <li>907-269-7384</li>
                </FlexList>
                <FlexList>
                  <li>
                    Southcentral Foundation Family Wellness Warriors Initiative
                  </li>
                  <li>
                    <UnderlineLink to="https://www.southcentralfoundation.com/services/family-wellness-warriors/">
                      www.southcentralfoundation.com/services/family-wellness-warriors/
                    </UnderlineLink>
                  </li>
                  <li>907-729-5440</li>
                </FlexList>
                <FlexList>
                  <li>Victim Service Unit</li>
                  <li>
                    Crime Victim Resources | Pretrial, Probation & Parole |
                    Alaska Department of Corrections
                  </li>
                  <li>907-269-7384</li>
                  <li>victimsunit@alaska.gov</li>
                </FlexList>
                <FlexList>
                  <li>Violent Crimes Compensation Board</li>

                  <li>907-269-7384</li>
                </FlexList>
                <FlexList>
                  <li>Village Public Safety Officers</li>
                  <li>
                    <UnderlineLink to="https://dps.alaska.gov/AST/VPSO/Home ">
                      dps.alaska.gov/AST/VPSO/Home
                    </UnderlineLink>
                  </li>
                  <li>907-269-5511</li>
                </FlexList>
                <FlexList>
                  <li>
                    VINE System (register to be notified if an inmate is
                    released from jail)
                  </li>
                  <li>
                    <UnderlineLink to="https://www.vinelink.com">
                      www.vinelink.com
                    </UnderlineLink>
                  </li>
                </FlexList>
              </div>
            </div>
            <div id="national" className=" scroll-mt-36 ">
              <Heading>National</Heading>
              <div className="text-white text-xl flex flex-col gap-y-8 ">
                <FlexList>
                  <li>Administration for Children and Families</li>
                  <li>
                    Missing and Murdered Native Americans (MMNA) – A Public
                    Health Framework for Action | The Administration for
                    Children and Families (hhs.gov)
                  </li>
                </FlexList>
                <FlexList>
                  <li>
                    Alliance of Tribal Coalitions to End Violence (ATCEV){" "}
                  </li>
                  <li>
                    <UnderlineLink to="https://www.atcev.org">
                      www.atcev.org
                    </UnderlineLink>
                  </li>
                  <li>888-577-0940</li>
                </FlexList>
                <FlexList>
                  <li>
                    Bureau of Indian Affairs (BIA) Office of Justice Services
                    (OJS) Missing and Murdered Unit
                  </li>
                  <li>
                    <UnderlineLink to="https://www.bia.gov/bia/ojs/missing-murdered-unit">
                      www.bia.gov/bia/ojs/missing-murdered-unit
                    </UnderlineLink>
                  </li>
                  <li>ojs_mmu@bia.gov </li>
                  <li>833-560-2065</li>
                </FlexList>
                <FlexList>
                  <li>Congressional Research Service</li>
                  <li>
                    2022 Report prepared for Members and Committees of Congress{" "}
                  </li>
                  <li>
                    Missing and Murdered Indigenous People (MMIP): Overview of
                    Recent Research, Legislation, and Selected Issues for
                    Congress
                  </li>
                </FlexList>
                <FlexList>
                  <li>Data for Indigenous Justice</li>
                  <li>
                    <UnderlineLink to="https://dataforindigenousjustice.com/ ">
                      dataforindigenousjustice.com/
                    </UnderlineLink>
                  </li>
                </FlexList>
                <FlexList>
                  <li>Department of Justice Operation Lady Justice</li>
                  <li>
                    <UnderlineLink to="https://usdoj.gov">
                      When a Loved One Goes Missing: Resources for Families of
                      Missing American Indian and Alaska Native Adults
                    </UnderlineLink>
                  </li>
                </FlexList>
                <FlexList>
                  <li>Missing and Murdered Indigenous Women USA</li>
                  <li>Missing and Murdered Indigenous Women USA | Facebook</li>
                </FlexList>
                <FlexList>
                  <li>National Center for Missing & Exploited Children</li>
                  <li>
                    <UnderlineLink to="https://www.missingkids.org ">
                      www.missingkids.org
                    </UnderlineLink>
                  </li>
                  <li>800-THE-LOST (800-843-5678)</li>
                </FlexList>
                <FlexList>
                  <li>National Center for Victims of Crime</li>
                  <li>
                    <UnderlineLink to="https://www.victimsofcrime.org">
                      www.victimsofcrime.org
                    </UnderlineLink>
                  </li>
                  <li>info@victimsofcrime.org </li>
                  <li>202-467-8700 </li>
                </FlexList>
                <FlexList>
                  <li>National Congress of American Indians </li>
                  <li>
                    State of the Data on Violence Against American Indian and
                    Alaska Native Women and Girls{" "}
                  </li>
                  <li>
                    <UnderlineLink to="https://www.ncai.org">
                      www.ncai.org
                    </UnderlineLink>
                  </li>
                  <li>202-466-7767</li>
                </FlexList>
                <FlexList>
                  <li>National Domestic Violence Hotline </li>

                  <li>
                    <UnderlineLink to="https://www.thehotline.org">
                      www.thehotline.org
                    </UnderlineLink>
                  </li>
                  <li>1-800-799-SAFE (7233)</li>
                </FlexList>
                <FlexList>
                  <li>National Human Trafficking Hotline </li>

                  <li>
                    <UnderlineLink to="https://www.humantraffickinghotline.org">
                      www.humantraffickinghotline.org
                    </UnderlineLink>
                  </li>
                  <li>888-373-7888 </li>
                </FlexList>
                <FlexList>
                  <li>National Indigenous Women’s Resource Center (NIWRC)</li>

                  <li>
                    <UnderlineLink to="https://www.niwrc.org">
                      www.niwrc.org
                    </UnderlineLink>
                  </li>
                  <li>
                    Special Collection: Special Collection: Missing and Murdered
                    Indigenous Women and Girls | NIWRC{" "}
                  </li>
                </FlexList>
                <FlexList>
                  <li>Missing Sisters Initiative Tools: </li>

                  <li>
                    <UnderlineLink to="https://www.niwrc.org/sites/default/files/documents/Resources/misti_full_workbook.pdf">
                      www.niwrc.org/sites/default/files/documents/Resources/misti_full_workbook.pdf
                    </UnderlineLink>
                  </li>
                </FlexList>
                <FlexList>
                  <li>
                    National Missing and Unidentified Persons System (NamUs) for
                    data collection:{" "}
                  </li>

                  <li>
                    <UnderlineLink to="https://www.namus.gov/">
                      www.namus.gov/
                    </UnderlineLink>
                  </li>
                  <li>833-872-5176 </li>
                </FlexList>
                <FlexList>
                  <li>National Runaway Safeline</li>

                  <li>
                    <UnderlineLink to="https://www.1800runaway.org">
                      www.1800runaway.org
                    </UnderlineLink>
                  </li>
                  <li>800-786-2929 </li>
                </FlexList>
                <FlexList>
                  <li>National Suicide Prevention Lifeline</li>

                  <li>
                    <UnderlineLink to="https:/www.suicideprevtionlifeline.org ">
                      www.suicideprevtionlifeline.org
                    </UnderlineLink>
                  </li>
                  <li>800-273-8255</li>
                </FlexList>
                <FlexList>
                  <li>Native Movement:</li>

                  <li>
                    <UnderlineLink to="https://www.nativemovement.org/26">
                      www.nativemovement.org/26
                    </UnderlineLink>
                  </li>
                </FlexList>
                <FlexList>
                  <li>OVC Directory of Crime Victim Services </li>

                  <li>
                    <UnderlineLink to="www.ovc.ojp.gov/directory-crime-victim-services">
                      www.ovc.ojp.gov/directory-crime-victim-services
                    </UnderlineLink>
                  </li>
                </FlexList>
                <FlexList>
                  <li>
                    Stop It Now – a national nonprofit dedicated to stopping
                    child abuse{" "}
                  </li>

                  <li>
                    <UnderlineLink to="https://www.stopitnow.org/">
                      Stop It Now
                    </UnderlineLink>
                  </li>
                </FlexList>
                <FlexList>
                  <li>StrongHearts Native Helpline</li>

                  <li>
                    <UnderlineLink to="https://www.strongheartshelplineorg ">
                      www.strongheartshelplineorg
                    </UnderlineLink>
                  </li>
                  <li>844-7NATIVE (844-762-8483)</li>
                </FlexList>
                <FlexList>
                  <li>Sovereign Bodies Institute:</li>

                  <li>
                    <UnderlineLink to="https://www.sovereign-bodies.org ">
                      www.sovereign-bodies.org
                    </UnderlineLink>
                  </li>
                </FlexList>
                <FlexList>
                  <li>
                    MMIWG2 & MMIP Organizing Toolkit: published by SBI with
                    MMIWG2 families{" "}
                  </li>
                  <li>
                    <UnderlineLink to="https://2a840442-f49a-45b0-b1a1-7531a7cd3d30.filesusr.com/ugd/6b33f7_2585fecaf9294450a595509cb701e7af.pdf">
                      MMIWG2 & MMIP Organizing Toolkit
                    </UnderlineLink>
                  </li>
                </FlexList>
                <FlexList>
                  <li>The Tribal Resource Tool</li>
                  <li>
                    A searchable directory of services available for all AI/AN
                    survivors of crime and abuse in Indian Country{" "}
                  </li>
                  <li>
                    <UnderlineLink to="https://www.tribalresourcetool.org">
                      www.tribalresourcetool.org
                    </UnderlineLink>
                  </li>
                </FlexList>
                <FlexList>
                  <li>United Nations</li>
                  <li>
                    Entity for Gender Equality and the Empowerment of Women
                  </li>
                  <li>
                    <UnderlineLink to="https://www.unfpa.org/resources/breaking-silence-violence-against-indigenous-girls-adolescents-and-young-women">
                      Breaking the Silence of Violence Against Indigenous Girls,
                      Adolescents, and Young Women
                    </UnderlineLink>
                  </li>
                </FlexList>
                <FlexList>
                  <li>White House – Operation Lady Justice </li>
                  <li>
                    Several fact sheets, data collection updates and law
                    enforcement protocols:{" "}
                  </li>
                  <li>
                    <UnderlineLink to="https://operationladyjustice.usdoj.gov/">
                      operationladyjustice.usdoj.gov/
                    </UnderlineLink>
                  </li>
                </FlexList>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
