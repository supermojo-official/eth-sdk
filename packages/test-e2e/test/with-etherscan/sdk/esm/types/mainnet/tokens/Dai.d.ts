import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface DaiInterface extends Interface {
    getFunction(nameOrSignature: "DOMAIN_SEPARATOR" | "PERMIT_TYPEHASH" | "allowance" | "approve" | "balanceOf" | "burn" | "decimals" | "deny" | "mint" | "move" | "name" | "nonces" | "permit" | "pull" | "push" | "rely" | "symbol" | "totalSupply" | "transfer" | "transferFrom" | "version" | "wards"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Approval" | "LogNote" | "Transfer"): EventFragment;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "PERMIT_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "approve", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "burn", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "deny", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "mint", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "move", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "permit", values: [
        AddressLike,
        AddressLike,
        BigNumberish,
        BigNumberish,
        boolean,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "pull", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "push", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "rely", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    encodeFunctionData(functionFragment: "wards", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PERMIT_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "move", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pull", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "push", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;
}
export declare namespace ApprovalEvent {
    type InputTuple = [
        src: AddressLike,
        guy: AddressLike,
        wad: BigNumberish
    ];
    type OutputTuple = [src: string, guy: string, wad: bigint];
    interface OutputObject {
        src: string;
        guy: string;
        wad: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LogNoteEvent {
    type InputTuple = [
        sig: BytesLike,
        usr: AddressLike,
        arg1: BytesLike,
        arg2: BytesLike,
        data: BytesLike
    ];
    type OutputTuple = [
        sig: string,
        usr: string,
        arg1: string,
        arg2: string,
        data: string
    ];
    interface OutputObject {
        sig: string;
        usr: string;
        arg1: string;
        arg2: string;
        data: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TransferEvent {
    type InputTuple = [
        src: AddressLike,
        dst: AddressLike,
        wad: BigNumberish
    ];
    type OutputTuple = [src: string, dst: string, wad: bigint];
    interface OutputObject {
        src: string;
        dst: string;
        wad: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface Dai extends BaseContract {
    connect(runner?: ContractRunner | null): Dai;
    waitForDeployment(): Promise<this>;
    interface: DaiInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    DOMAIN_SEPARATOR: TypedContractMethod<[], [string], "view">;
    PERMIT_TYPEHASH: TypedContractMethod<[], [string], "view">;
    allowance: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    approve: TypedContractMethod<[
        usr: AddressLike,
        wad: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    balanceOf: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    burn: TypedContractMethod<[
        usr: AddressLike,
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    decimals: TypedContractMethod<[], [bigint], "view">;
    deny: TypedContractMethod<[guy: AddressLike], [void], "nonpayable">;
    mint: TypedContractMethod<[
        usr: AddressLike,
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    move: TypedContractMethod<[
        src: AddressLike,
        dst: AddressLike,
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    name: TypedContractMethod<[], [string], "view">;
    nonces: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    permit: TypedContractMethod<[
        holder: AddressLike,
        spender: AddressLike,
        nonce: BigNumberish,
        expiry: BigNumberish,
        allowed: boolean,
        v: BigNumberish,
        r: BytesLike,
        s: BytesLike
    ], [
        void
    ], "nonpayable">;
    pull: TypedContractMethod<[
        usr: AddressLike,
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    push: TypedContractMethod<[
        usr: AddressLike,
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    rely: TypedContractMethod<[guy: AddressLike], [void], "nonpayable">;
    symbol: TypedContractMethod<[], [string], "view">;
    totalSupply: TypedContractMethod<[], [bigint], "view">;
    transfer: TypedContractMethod<[
        dst: AddressLike,
        wad: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    transferFrom: TypedContractMethod<[
        src: AddressLike,
        dst: AddressLike,
        wad: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    version: TypedContractMethod<[], [string], "view">;
    wards: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "DOMAIN_SEPARATOR"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "PERMIT_TYPEHASH"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "approve"): TypedContractMethod<[
        usr: AddressLike,
        wad: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "burn"): TypedContractMethod<[
        usr: AddressLike,
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "decimals"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "deny"): TypedContractMethod<[guy: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "mint"): TypedContractMethod<[
        usr: AddressLike,
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "move"): TypedContractMethod<[
        src: AddressLike,
        dst: AddressLike,
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "name"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "nonces"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "permit"): TypedContractMethod<[
        holder: AddressLike,
        spender: AddressLike,
        nonce: BigNumberish,
        expiry: BigNumberish,
        allowed: boolean,
        v: BigNumberish,
        r: BytesLike,
        s: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "pull"): TypedContractMethod<[
        usr: AddressLike,
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "push"): TypedContractMethod<[
        usr: AddressLike,
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "rely"): TypedContractMethod<[guy: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "symbol"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
        dst: AddressLike,
        wad: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
        src: AddressLike,
        dst: AddressLike,
        wad: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "version"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "wards"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
    getEvent(key: "LogNote"): TypedContractEvent<LogNoteEvent.InputTuple, LogNoteEvent.OutputTuple, LogNoteEvent.OutputObject>;
    getEvent(key: "Transfer"): TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
    filters: {
        "Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        Approval: TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        "LogNote(bytes4,address,bytes32,bytes32,bytes)": TypedContractEvent<LogNoteEvent.InputTuple, LogNoteEvent.OutputTuple, LogNoteEvent.OutputObject>;
        LogNote: TypedContractEvent<LogNoteEvent.InputTuple, LogNoteEvent.OutputTuple, LogNoteEvent.OutputObject>;
        "Transfer(address,address,uint256)": TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
        Transfer: TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
    };
}
