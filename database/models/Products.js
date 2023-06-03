const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('product', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    description:{
      type:DataTypes.TEXT
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
        type:DataTypes.STRING,
    },
    stock:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    visits:{
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    condition: {
        type: DataTypes.STRING,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    status:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    hidden: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    date:{
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
  {
    timestamps: false,
  }
  );
}