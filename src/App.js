import React, { useState } from "react";

function App() {
  const [myInfo, setMyInfo] = useState();
  const [skills, setSkills] = useState([]);
  const [additionalSkills, setAdditionalSkills] = useState([]);
  const [showMainApplication, setShowMainApplication] = useState(false);
  const handleGenerateCoverLetter = (event) => {
    event.preventDefault();
    const mainForm = event.target;
    const myName = mainForm.name.value;
    const jobTitle = mainForm.jobTitle.value;
    const company = mainForm.company.value;
    const companyType = mainForm.companyType.value;
    const myData = { myName, jobTitle, company, companyType };
    setMyInfo(myData);
    setShowMainApplication(true);
  };
  return (
    <div className="p-8 w-11/12">
      <h2 className="text-center text-2xl uppercase font-bold text-indigo-700 mt-10">
        cover letter generator
      </h2>
      <section className="lg:flex justify-center gap-7  mt-10">
        <div className="mt-8  lg:w-2/3 mb-8">
          <form
            onSubmit={handleGenerateCoverLetter}
            className="flex flex-col flex-wrap items-start content-center justify-center mx-auto"
          >
            <div className="mt-6 mx-auto flex flex-col">
              <label for="name" className="mr-3 font-semibold">
                Your Name:
              </label>
              <input
                className="px-2 py-1 border-2 rounded border-indigo-700  focus:border-2 focus:rounded focus:border-indigo-700 focus:outline-none"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mt-6 mx-auto flex flex-col ">
              <label for="jobTitle" className="mr-3 font-semibold">
                Job Title:
              </label>
              <input
                className="px-2 py-1 border-2 rounded border-indigo-700  focus:border-2 focus:rounded focus:border-indigo-700 focus:outline-none"
                type="text"
                name="jobTitle"
                required
                placeholder="Job Title"
              />
            </div>
            <div className="mt-6 mx-auto flex flex-col">
              <label for="company" className="mr-3 font-semibold">
                Company:
              </label>
              <input
                className="px-2 py-1 border-2 rounded border-indigo-700  focus:border-2 focus:rounded focus:border-indigo-700 focus:outline-none"
                type="text"
                name="company"
                required
                placeholder="Company Name"
              />
            </div>
            <div className="mt-6 mx-auto flex flex-col">
              <label for="companyType" className="mr-3 font-semibold">
                Company Type:
              </label>
              <select
                name="companyType"
                required
                className="border-2 rounded border-indigo-700  focus:border-2 focus:rounded focus:border-indigo-700 focus:outline-none"
              >
                <option value="start up">Start Up</option>
                <option value="mid level">Mid Level</option>
                <option value="established">Established</option>
              </select>
            </div>

            <div className="flex flex-wrap items-center mx-auto">
              <div className="mt-6 mx-auto flex flex-col">
                <label for="skills" className="text-left font-semibold">
                  Your Skills:
                </label>
                <input
                  className="px-2 py-1 border-2 rounded border-indigo-700  focus:border-2 focus:rounded focus:border-indigo-700 focus:outline-none"
                  type="text"
                  name="skills"
                  placeholder="Skills"
                />
              </div>
              <input
                style={{ height: "35px" }}
                onClick={(event) => {
                  // console.log(event.target.parentNode.children[0].children[1]);
                  const newAddedSkill =
                    event.target.parentNode.children[0].children[1].value;
                  skills.push(newAddedSkill);
                  event.target.parentNode.children[0].children[1].value = "";
                  // console.log(newAddedSkill);
                }}
                type="submit"
                name="skills"
                value="Add"
                className="bg-indigo-700 cursor-pointer text-white rounded px-2 py-1 ml-1 mt-12 md:mt-10"
              />
            </div>

            <div className="flex flex-wrap items-center mx-auto">
              <div className="mt-6 mx-auto flex flex-col">
                <label
                  for="additionalSkills"
                  className="text-left font-semibold"
                >
                  Additional Skills:
                </label>
                <input
                  className="px-2 py-1 border-2 rounded border-indigo-700  focus:border-2 focus:rounded focus:border-indigo-700 focus:outline-none"
                  type="text"
                  name="additionalSkills"
                  placeholder="Additional Skills"
                />
              </div>
              <input
                style={{ height: "35px" }}
                onClick={(event) => {
                  const newAddedSkill =
                    event.target.parentNode.children[0].children[1].value;
                  additionalSkills.push(newAddedSkill);
                  event.target.parentNode.children[0].children[1].value = "";
                  // console.log(newAddedSkill);
                }}
                type="submit"
                name="additionalSkills"
                required
                value="Add"
                className="bg-indigo-700 mt-12 md:mt-10 cursor-pointer text-white rounded px-2 py-1 mx-auto ml-1"
              />
            </div>

            <p className="bg-indigo-700 text-white rounded px-4 py-1 mx-auto cursor-pointer mt-5">
              Press Add button to update the result
            </p>
          </form>
        </div>
        <div className="">
          <h2 className="text-center text-2xl uppercase font-bold text-indigo-700">
            Preview
          </h2>
          <section className="mt-4 p-4 bg-lime-300">
            <div className="md:flex justify-evenly">
              <h2>Name: {myInfo && myInfo.myName}</h2>
              <h2>Company: {myInfo && myInfo.company}</h2>
              <h2>Company Type: {myInfo && myInfo.companyType}</h2>
              <h2>Job Title: {myInfo && myInfo.jobTitle}</h2>
            </div>
            <div className="text-center mt-4">
              <h2 className="mb-4">
                Skills:{" "}
                {skills.length > 0 &&
                  skills.map((skill) => (
                    <span className="">
                      <span className="mx-1">
                        <span className="font-semibold text-lg">{skill}</span>{" "}
                        <span
                          className="btn btn-xs btn-circle btn-outline cursor-pointer"
                          onClick={() => {
                            let filteredSkills = skills.filter((newSkill) => {
                              return newSkill !== skill;
                            });
                            setSkills(filteredSkills);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                      </span>
                    </span>
                  ))}
              </h2>
              <h2>
                Additional Skills:
                {additionalSkills.length > 0 &&
                  additionalSkills.map((skill) => (
                    <span className="">
                      <span className="mx-1">
                        <span className="font-semibold text-lg">{skill}</span>{" "}
                        <span
                          className="btn btn-xs btn-circle btn-outline cursor-pointer"
                          onClick={() => {
                            let filteredSkills = additionalSkills.filter(
                              (newSkill) => {
                                return newSkill !== skill;
                              }
                            );
                            setAdditionalSkills(filteredSkills);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                      </span>
                    </span>
                  ))}
              </h2>
            </div>
          </section>
          <section className="mt-6 mainApplication">
            {showMainApplication ? (
              <p>
                Dear [Hiring Manager],
                <br />
                <br /> I am writing to express my interest in the{" "}
                {myInfo && myInfo.jobTitle} position at{" "}
                {myInfo && myInfo.company}. With a strong passion and a desire
                to work in a {myInfo && myInfo.companyType} company environment,
                I am confident that I would be a valuable asset to your team. I
                have gained experience in {myInfo && myInfo.jobTitle} through
                coursework and personal projects. I am well-versed in
                technologies such as{" "}
                {skills.length > 0 &&
                  skills.map((sk) => {
                    if (sk !== skills[skills.length - 1]) {
                      return <a className="text-red-700 font-medium">{sk}, </a>;
                    }
                  })}
                and {skills[skills.length - 1]}. In addition, I have experience
                with{" "}
                {additionalSkills.length > 0 &&
                  additionalSkills.map((adsk) => (
                    <a className="text-red-700 font-medium">{adsk}, </a>
                  ))}
                and am always eager to learn new skills and technologies.
                <br />
                <br />I am excited about the opportunity to work at{" "}
                {myInfo && myInfo.company} and contribute to the development of
                innovative projects. I am a quick learner and a team player, and
                I am confident that my skills and enthusiasm will enable me to
                make a positive impact on your team. Thank you for considering
                my application.
                <br />
                <br />I look forward to the opportunity to discuss my
                qualifications further.
                <br />
                <br />
                Sincerely,
                <br />
                {myInfo && myInfo.myName}
              </p>
            ) : (
              <></>
            )}
          </section>
        </div>
      </section>
    </div>
  );
}

export default App;
