const Reg = require('../models/reg');

exports.createReg = async(req,res)=>{
    const pitems = new Reg({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        mobile:req.body.mobile
      });
    const r = await pitems.save();
    if (!r) {
        return res.status(404).json({ message: 'Reg not inserted' });
      }
      res.json(r);
}

exports.login = async (req, res) => {
    try {
      const regs = await Reg.find({username:req.body.username,password:req.body.password});
      if(regs.length!==0){
        res.json({"msg":"1"});
      }
      else{
        res.json({"msg":"0"});
      }
      
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

