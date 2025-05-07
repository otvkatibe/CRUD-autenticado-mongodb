const Endpoint = (req, res) => {
    console.log("Endpoint controller accessed");
    res.status(200).json({ message: 'This is a secured endpoint' });
}

export default { Endpoint };