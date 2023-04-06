import { Specification } from "../model/Specification";
import {
	ICreateSpecificationDTO,
	ISpecificationRepository,
} from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
	private specifications: Specification[];

	constructor() {
		this.specifications = [];
	}

	create({ name, description }: ICreateSpecificationDTO): void {
		const specification = new Specification();

		Object.arguments(specification, {
			name,
			description,
			created_at: new Date(),
		});

		this.specifications.push(specification);
	}
}

export { SpecificationRepository };
