import prisma from "../DB/db.config.js";


// fetch all the data from developer table and domain_Manager table 
export const fetchDeveloperAndDomainManager = async (req, res) => {
  try {
    const domain = req.params.domain;

    // Fetch developer data
    const developer = await prisma.developer.findMany({
      where: {
        domain: domain,
      },
    });

    // Fetch domain manager data
    const domainManager = await prisma.domain_Manager.findMany({
      where: {
        domain: domain,
      },
    });
 

  // Combine results
   const result = {
    developer: developer,
    domainManager: domainManager,
  };


    return res.json({ status: 200, data: result });
  } catch (error) {
    return res.json({ status: 500, message: error.message });
  }
};




// Perfrom delete the developer


