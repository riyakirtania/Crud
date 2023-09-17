const HospitalModel = require("../models/hospital");
const router = require("express").Router();

router.post("/createUser", async (req, res) => {
  const data = new HospitalModel(req.body);
  try {
    await data.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await HospitalModel.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await HospitalModel.findById({ _id: id });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/updateUser/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await HospitalModel.findByIdAndUpdate(
      id,
      {
        $set: {
            name:req.body.name,
            email:req.body.email,
            age:req.body.age
        },
      },
      { new: true }
    );
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/deleteUser/:id",async (req,res)=>{
    const id=req.params.id;
    try{
        await HospitalModel.findByIdAndDelete(id);
        res.status(200).json({message:"Deleted successfuly"});
    }catch(err){
        res.status(400).json(err)
    }
})

module.exports = router;
