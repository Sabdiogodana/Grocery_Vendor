class Mkulima{
    constructor(){
    this.mkulimafarm = [];
    this.Vendor = [];
    this.product = [];
    this.addNewFarm = (farmId, farmName, farmer, phoneNumber, address) => {
    this.mkulimafarm.push({farmId,farmName,farmer,phoneNumber,address})
    }
    this.removeFarm = (farmId) => {
    let specific = this.mkulimafarm.find(item => item.farmId ===farmId);
    let farmIndex = this.mkulimafarm.indexOf(specific);
    this.mkulimafarm.splice(farmIndex, 1);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
    let specificFarm = this.mkulimafarm.find(item => item.farmId ===farmId)
    specificFarm.farmId = newFarmId;
    specificFarm.farmName = newFarmName;
    specificFarm.farmer = newFarmerName;
    specificFarm.phoneNumber = newPhoneNumber;
    specificFarm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.mkulimafarm.find(object=>object.farmId===Id))
    }
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})
    }
    this.removeProduct = (productId) => {
    let specific = this.product.find(item => item.productId ===productId);
    let productIndex = this.product.indexOf(specific);
    this.product.splice(productIndex, );
    }
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    let specificProduct = this.product.find(item => item.productId ===productId)
    specificProduct.productId =newProductId;
    specificProduct.productName = newProductName;
    specificProduct.price = newPrice;
    }
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))
    }
    this.printProduct = ()=>{
    console.log(this.product)
    }
    this.calculateOrderCost = (productId,quantity)=>{
    let specificProduct = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${specificProduct.productName} for KES ${quantity*specificProduct.price}`);
    }
    }
    }
    let newmkulimafarm = new Mkulima();
    newmkulimafarm.addNewFarm("9765","Hanna","hannaFarm","254 764432224", "Njoro 12");
    newmkulimafarm.addNewFarm("2435","Wanjui","wanjuiFarm","254 794321423", "Riverside 002");
    newmkulimafarm.addNewFarm("6445","Manenos","nenoFarm","254 766633222", "Kimunye");
    newmkulimafarm.addNewFarm("8233","Denge","DengeFarm","254 700004445", "Timau00");
    console.log(newmkulimafarm.mkulimafarm);
    newmkulimafarm.removeFarm("2435");
    console.log()