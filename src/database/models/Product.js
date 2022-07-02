
module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: dataTypes.STRING
        },
        lastName: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        roleID: {
            type: dataTypes.INTEGER,
           // foreignKey: true
        }
    };
    let config = {
        tableName: "products",
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);
    return Product;
}