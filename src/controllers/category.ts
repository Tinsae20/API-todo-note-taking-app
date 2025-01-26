import { Request, Response, NextFunction } from "express";
import { Controller } from "../decorators/controller";
import { Route } from "../decorators/route";

@Controller('/category')
class CategoryController {

    @Route('get', '/list')
    getCategoryList(req: Request, res: Response, next: NextFunction):any {
        return res.status(200).json({message: "Category List"})
    }

    @Route('post', '/create')
    createCategory(req: Request, res: Response, next: NextFunction):any {
        return res.status(200).json({message: "Create Category"})
    }
}

export default CategoryController