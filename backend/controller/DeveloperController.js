import prisma from "../DB/db.config.js";

// * creating Developers records

export const createDeveloper = async (req, res) => {
  try {
    const {
      fullname,
      department,
      address,
      contact_no,
      designation,
      email,
      experience,
      technology,
      domain,
      ipaddress,
    } = req.body;

    const findDeveloper = await prisma.developer.findUnique({
      where: {
        email: email,
        domain: domain,
      },
    });

    if (findDeveloper) {
      return res
        .status(400)
        .json({ status: 400, message: "Developer already exists!!" });
    }
    const createDev = await prisma.developer.create({
      data: {
        fullname,
        department,
        address,
        contact_no,
        designation,
        email,
        experience,
        technology,
        domain,
        ipaddress,
      },
    });
    return res.status(200).json({
      staus: 200,
      data: createDev,
      message: "New developer record added !!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error });
  }
};


//  ** get a Developer
export const getDeveloper = async (req, res) => {
  const dev_id = req.params.id;
  try {
    const getDev = await prisma.developer.findFirst({
      where: {
        id: Number(dev_id),
      },
    });

    return res
      .status(200)
      .json({ status: 200, data: getDev, message: "Developer found!!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error });
  }
};


// * Updating Developers records
export const updateDeveloper = async (req, res) => {
  const dev_id = req.params.id;
  const {
    fullname,
    department,
    address,
    contact_no,
    designation,
    email,
    experience,
    technology,
    domain,
    ipaddress,
  } = req.body;

  try {


    const developer = await prisma.developer.update({
      where: {
        id:Number(dev_id),
      },
      data: {
        fullname,
        department,
        address,
        contact_no,
        designation,
        email,
        experience,
        technology,
        domain,
        ipaddress,
      },
    })


    return res.status(200).json({status:200, data:developer,message:"successfully updated!!"})
   
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error });
  }
};


// * Delete the developer
export const deleteDeveloper = async (req, res)=>{
  const dev_id = req.params.id;
  try {
    const developer = await prisma.developer.delete({
      where:{
        id:Number(dev_id),
      }
    })

    return res.status(200).json({status:200,data: developer, message:"Developer deleted successfully !!"})
    
  } catch (error) {
    return res.status(500).json({status:500,message:error});
  }
}