import UseCaseInterface from "../../@shared/usecase/use-case.interface";
import InvoiceFacadeInterface, { FindInvoiceFacadeOutputDTO, GenerateInvoiceFacadeInputDto,
  GenerateInvoiceFacadeOutputDto,
} from "./invoice.facade.interface";

export interface UseCaseProps {
    findUsecase: UseCaseInterface;
    generateUsecase: UseCaseInterface;
}

export default class InvoiceFacade implements InvoiceFacadeInterface {
    private _findUseCase: UseCaseInterface;
    private _generateUseCase: UseCaseInterface;
  
    constructor(usecaseProps: UseCaseProps) {
        this._findUseCase = usecaseProps.findUsecase;
        this._generateUseCase = usecaseProps.generateUsecase;
    }

    async create(invoice: GenerateInvoiceFacadeInputDto): Promise<GenerateInvoiceFacadeOutputDto> {
        return await this._generateUseCase.execute(invoice);
    }

    async find(invoiceId: string): Promise<FindInvoiceFacadeOutputDTO> {
        return await this._findUseCase.execute({ id: invoiceId });
    }
}