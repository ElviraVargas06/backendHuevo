import { Blog } from "../models/Blog.js";

//Mostrar todos los registros
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.json(blogs);
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Mostrar un registro
export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findAll({
      where: { id: req.params.id },
    });
    res.json(blog[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Crear un registro
export const createBlog = async (req, res) => {
  try {
    await Blog.create(req.body);
    res.json({
      message: "┬íRegistro creado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Actualizar un registro
export const updateBlog = async (req, res) => {
  try {
    await Blog.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "┬íRegistro actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Eliminar un registro
export const deleteBlog = async (req, res) => {
  try {
    await Blog.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "┬íRegistro eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
