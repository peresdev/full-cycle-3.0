import UseCaseInterface from "../../../@shared/usecase/use-case.interface";
import Invoice from "../../domain/invoice.entity";
import InvoiceGateway from "../../gateway/invoice.gateway";
import { FindInvoiceUseCaseInputDTO, FindInvoiceUseCaseOutputDTO } from "./find.dto";

export default class FindInvoiceUseCase implements UseCaseInterface {
    
    constructor(private _invoiceRepository: InvoiceGateway) {
    }

    async execute(input: FindInvoiceUseCaseInputDTO): Promise<FindInvoiceUseCaseOutputDTO> {
        const result = await this._invoiceRepository.find(input.id);

        return this.toDTO(result);
    }

    private toDTO(invoice: Invoice): FindInvoiceUseCaseOutputDTO {
        return {
            id: invoice.id.id,
            name: invoice.name,
            document: invoice.document,
            address: {
                street: invoice.address.street,
                number: invoice.address.number,
                complement: invoice.address.complement,
                city: invoice.address.city,
                state: invoice.address.state,
                zipCode: invoice.address.zipCode,
            },
            items: invoice.items.map((item: any) => {
                return {
                    id: item.id.id,
                    name: item.name,
                    price: item.price,
                };
            }),
            createdAt: invoice.createdAt,
            total: invoice.total,
        };
    }
}