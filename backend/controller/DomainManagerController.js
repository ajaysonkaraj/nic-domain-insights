import prisma from "../DB/db.config.js";

//  * Adding new Domain name and Manager's record
export const createDomain = async (req, res) => {
  try {
    const {
      domain,
      ipaddress,
      registrationdate,
      updateddate,
      expirydate,
      registrar,
      takentime,
      department,
      //manager
      fullname,
      designation,
      manager_department,
      address,
      contact_no,
      email,
    } = req.body;

    const findDomain = await prisma.domain_Manager.findUnique({
      where: {
        domain: domain,
      },
    });

    if (findDomain) {
      alert("Domain already exist");
      return res
        .status(400)
        .json({ status: 400, message: " Domain already exist !!" });
    }

    const createDomain = await prisma.domain_Manager.create({
      data: {
        domain,
        ipaddress,
        registrationdate:  new Date(registrationdate).toISOString() ,
        updateddate:  new Date(updateddate).toISOString(),
        expirydate:  new Date(expirydate).toISOString(),
        registrar,
        takentime,
        department,
        //manager
        fullname,
        designation,
        manager_department,
        address,
        contact_no,
        email,
      },
    });

    return res.status(200).json({
      status: 200,
      data: createDomain,
      message: "Domain and Manager record added !!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error });
  }
};
