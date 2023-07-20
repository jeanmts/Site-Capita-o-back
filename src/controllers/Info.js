const pool = require( "../services/connection");

const dados = async ( req ,res) => {
    const {nome, email, telefone, cpf} = req.body
    try {
        if (!nome || !telefone || !cpf || !email) {
            res.json({message: "Todos os campos são obrigatorios"})
        }
        const query = "insert into dadosdousuario (nome, email, telefone, cpf) values ($1, $2, $3, $4)";
        const params = [nome, email, telefone, cpf];
        const record = await pool.query(query, params);
        res.status(200).json({ message: "Cadastro concluido"})
    } catch (error) {
        console.log(error)
    }
}


const usuarios = async (req, res) => {
    try {
        const query  = "select * from dadosdousuario"
        const {rows} = await pool.query(query)
        res.status(200).json(rows)
    } catch (error) {
        console.log(error)
    }
}
module.exports = {dados, usuarios};
