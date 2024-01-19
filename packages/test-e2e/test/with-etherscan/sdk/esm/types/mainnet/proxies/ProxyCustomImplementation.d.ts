import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface ProxyCustomImplementationInterface extends Interface {
    getFunction(nameOrSignature: "_become" | "_borrowGuardianPaused" | "_grantComp" | "_mintGuardianPaused" | "_setBorrowCapGuardian" | "_setBorrowPaused" | "_setCloseFactor" | "_setCollateralFactor" | "_setCompSpeeds" | "_setContributorCompSpeed" | "_setLiquidationIncentive" | "_setMarketBorrowCaps" | "_setMintPaused" | "_setPauseGuardian" | "_setPriceOracle" | "_setSeizePaused" | "_setTransferPaused" | "_supportMarket" | "accountAssets" | "admin" | "allMarkets" | "borrowAllowed" | "borrowCapGuardian" | "borrowCaps" | "borrowGuardianPaused" | "borrowVerify" | "checkMembership" | "claimComp(address,address[])" | "claimComp(address[],address[],bool,bool)" | "claimComp(address)" | "closeFactorMantissa" | "compAccrued" | "compBorrowSpeeds" | "compBorrowState" | "compBorrowerIndex" | "compContributorSpeeds" | "compInitialIndex" | "compRate" | "compReceivable" | "compSpeeds" | "compSupplierIndex" | "compSupplySpeeds" | "compSupplyState" | "comptrollerImplementation" | "enterMarkets" | "exitMarket" | "fixBadAccruals" | "getAccountLiquidity" | "getAllMarkets" | "getAssetsIn" | "getBlockNumber" | "getCompAddress" | "getHypotheticalAccountLiquidity" | "isComptroller" | "isDeprecated" | "lastContributorBlock" | "liquidateBorrowAllowed" | "liquidateBorrowVerify" | "liquidateCalculateSeizeTokens" | "liquidationIncentiveMantissa" | "markets" | "maxAssets" | "mintAllowed" | "mintGuardianPaused" | "mintVerify" | "oracle" | "pauseGuardian" | "pendingAdmin" | "pendingComptrollerImplementation" | "proposal65FixExecuted" | "redeemAllowed" | "redeemVerify" | "repayBorrowAllowed" | "repayBorrowVerify" | "seizeAllowed" | "seizeGuardianPaused" | "seizeVerify" | "transferAllowed" | "transferGuardianPaused" | "transferVerify" | "updateContributorRewards"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "ActionPaused(string,bool)" | "ActionPaused(address,string,bool)" | "CompAccruedAdjusted" | "CompBorrowSpeedUpdated" | "CompGranted" | "CompReceivableUpdated" | "CompSupplySpeedUpdated" | "ContributorCompSpeedUpdated" | "DistributedBorrowerComp" | "DistributedSupplierComp" | "Failure" | "MarketEntered" | "MarketExited" | "MarketListed" | "NewBorrowCap" | "NewBorrowCapGuardian" | "NewCloseFactor" | "NewCollateralFactor" | "NewLiquidationIncentive" | "NewPauseGuardian" | "NewPriceOracle"): EventFragment;
    encodeFunctionData(functionFragment: "_become", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "_borrowGuardianPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "_grantComp", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "_mintGuardianPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "_setBorrowCapGuardian", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "_setBorrowPaused", values: [AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "_setCloseFactor", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setCollateralFactor", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setCompSpeeds", values: [AddressLike[], BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "_setContributorCompSpeed", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setLiquidationIncentive", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setMarketBorrowCaps", values: [AddressLike[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "_setMintPaused", values: [AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "_setPauseGuardian", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "_setPriceOracle", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "_setSeizePaused", values: [boolean]): string;
    encodeFunctionData(functionFragment: "_setTransferPaused", values: [boolean]): string;
    encodeFunctionData(functionFragment: "_supportMarket", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "accountAssets", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "allMarkets", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrowAllowed", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrowCapGuardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowCaps", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "borrowGuardianPaused", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "borrowVerify", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkMembership", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "claimComp(address,address[])", values: [AddressLike, AddressLike[]]): string;
    encodeFunctionData(functionFragment: "claimComp(address[],address[],bool,bool)", values: [AddressLike[], AddressLike[], boolean, boolean]): string;
    encodeFunctionData(functionFragment: "claimComp(address)", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "closeFactorMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "compAccrued", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "compBorrowSpeeds", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "compBorrowState", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "compBorrowerIndex", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "compContributorSpeeds", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "compInitialIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "compRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "compReceivable", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "compSpeeds", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "compSupplierIndex", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "compSupplySpeeds", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "compSupplyState", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "comptrollerImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "enterMarkets", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "exitMarket", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "fixBadAccruals", values: [AddressLike[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getAccountLiquidity", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getAllMarkets", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAssetsIn", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getBlockNumber", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCompAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "getHypotheticalAccountLiquidity", values: [AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isComptroller", values?: undefined): string;
    encodeFunctionData(functionFragment: "isDeprecated", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "lastContributorBlock", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "liquidateBorrowAllowed", values: [AddressLike, AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "liquidateBorrowVerify", values: [
        AddressLike,
        AddressLike,
        AddressLike,
        AddressLike,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "liquidateCalculateSeizeTokens", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "liquidationIncentiveMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "markets", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "maxAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintAllowed", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintGuardianPaused", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "mintVerify", values: [AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseGuardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingComptrollerImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposal65FixExecuted", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeemAllowed", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemVerify", values: [AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayBorrowAllowed", values: [AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayBorrowVerify", values: [AddressLike, AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "seizeAllowed", values: [AddressLike, AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "seizeGuardianPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "seizeVerify", values: [AddressLike, AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferAllowed", values: [AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferGuardianPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferVerify", values: [AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateContributorRewards", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "_become", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_borrowGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_grantComp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_mintGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setBorrowCapGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setBorrowPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setCloseFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setCollateralFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setCompSpeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setContributorCompSpeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setLiquidationIncentive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setMarketBorrowCaps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setMintPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPauseGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPriceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setSeizePaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setTransferPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_supportMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accountAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowCapGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowCaps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkMembership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimComp(address,address[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimComp(address[],address[],bool,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimComp(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeFactorMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compAccrued", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compBorrowSpeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compBorrowState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compBorrowerIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compContributorSpeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compInitialIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compReceivable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compSpeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compSupplierIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compSupplySpeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compSupplyState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "comptrollerImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enterMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fixBadAccruals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetsIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBlockNumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCompAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHypotheticalAccountLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isComptroller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDeprecated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastContributorBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidateBorrowAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidateBorrowVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidateCalculateSeizeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationIncentiveMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "markets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingComptrollerImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposal65FixExecuted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayBorrowAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayBorrowVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seizeAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seizeGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seizeVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateContributorRewards", data: BytesLike): Result;
}
export declare namespace ActionPaused_string_bool_Event {
    type InputTuple = [action: string, pauseState: boolean];
    type OutputTuple = [action: string, pauseState: boolean];
    interface OutputObject {
        action: string;
        pauseState: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ActionPaused_address_string_bool_Event {
    type InputTuple = [
        cToken: AddressLike,
        action: string,
        pauseState: boolean
    ];
    type OutputTuple = [
        cToken: string,
        action: string,
        pauseState: boolean
    ];
    interface OutputObject {
        cToken: string;
        action: string;
        pauseState: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CompAccruedAdjustedEvent {
    type InputTuple = [
        user: AddressLike,
        oldCompAccrued: BigNumberish,
        newCompAccrued: BigNumberish
    ];
    type OutputTuple = [
        user: string,
        oldCompAccrued: bigint,
        newCompAccrued: bigint
    ];
    interface OutputObject {
        user: string;
        oldCompAccrued: bigint;
        newCompAccrued: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CompBorrowSpeedUpdatedEvent {
    type InputTuple = [cToken: AddressLike, newSpeed: BigNumberish];
    type OutputTuple = [cToken: string, newSpeed: bigint];
    interface OutputObject {
        cToken: string;
        newSpeed: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CompGrantedEvent {
    type InputTuple = [recipient: AddressLike, amount: BigNumberish];
    type OutputTuple = [recipient: string, amount: bigint];
    interface OutputObject {
        recipient: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CompReceivableUpdatedEvent {
    type InputTuple = [
        user: AddressLike,
        oldCompReceivable: BigNumberish,
        newCompReceivable: BigNumberish
    ];
    type OutputTuple = [
        user: string,
        oldCompReceivable: bigint,
        newCompReceivable: bigint
    ];
    interface OutputObject {
        user: string;
        oldCompReceivable: bigint;
        newCompReceivable: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CompSupplySpeedUpdatedEvent {
    type InputTuple = [cToken: AddressLike, newSpeed: BigNumberish];
    type OutputTuple = [cToken: string, newSpeed: bigint];
    interface OutputObject {
        cToken: string;
        newSpeed: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ContributorCompSpeedUpdatedEvent {
    type InputTuple = [contributor: AddressLike, newSpeed: BigNumberish];
    type OutputTuple = [contributor: string, newSpeed: bigint];
    interface OutputObject {
        contributor: string;
        newSpeed: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DistributedBorrowerCompEvent {
    type InputTuple = [
        cToken: AddressLike,
        borrower: AddressLike,
        compDelta: BigNumberish,
        compBorrowIndex: BigNumberish
    ];
    type OutputTuple = [
        cToken: string,
        borrower: string,
        compDelta: bigint,
        compBorrowIndex: bigint
    ];
    interface OutputObject {
        cToken: string;
        borrower: string;
        compDelta: bigint;
        compBorrowIndex: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DistributedSupplierCompEvent {
    type InputTuple = [
        cToken: AddressLike,
        supplier: AddressLike,
        compDelta: BigNumberish,
        compSupplyIndex: BigNumberish
    ];
    type OutputTuple = [
        cToken: string,
        supplier: string,
        compDelta: bigint,
        compSupplyIndex: bigint
    ];
    interface OutputObject {
        cToken: string;
        supplier: string;
        compDelta: bigint;
        compSupplyIndex: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace FailureEvent {
    type InputTuple = [
        error: BigNumberish,
        info: BigNumberish,
        detail: BigNumberish
    ];
    type OutputTuple = [error: bigint, info: bigint, detail: bigint];
    interface OutputObject {
        error: bigint;
        info: bigint;
        detail: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MarketEnteredEvent {
    type InputTuple = [cToken: AddressLike, account: AddressLike];
    type OutputTuple = [cToken: string, account: string];
    interface OutputObject {
        cToken: string;
        account: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MarketExitedEvent {
    type InputTuple = [cToken: AddressLike, account: AddressLike];
    type OutputTuple = [cToken: string, account: string];
    interface OutputObject {
        cToken: string;
        account: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MarketListedEvent {
    type InputTuple = [cToken: AddressLike];
    type OutputTuple = [cToken: string];
    interface OutputObject {
        cToken: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewBorrowCapEvent {
    type InputTuple = [cToken: AddressLike, newBorrowCap: BigNumberish];
    type OutputTuple = [cToken: string, newBorrowCap: bigint];
    interface OutputObject {
        cToken: string;
        newBorrowCap: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewBorrowCapGuardianEvent {
    type InputTuple = [
        oldBorrowCapGuardian: AddressLike,
        newBorrowCapGuardian: AddressLike
    ];
    type OutputTuple = [
        oldBorrowCapGuardian: string,
        newBorrowCapGuardian: string
    ];
    interface OutputObject {
        oldBorrowCapGuardian: string;
        newBorrowCapGuardian: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewCloseFactorEvent {
    type InputTuple = [
        oldCloseFactorMantissa: BigNumberish,
        newCloseFactorMantissa: BigNumberish
    ];
    type OutputTuple = [
        oldCloseFactorMantissa: bigint,
        newCloseFactorMantissa: bigint
    ];
    interface OutputObject {
        oldCloseFactorMantissa: bigint;
        newCloseFactorMantissa: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewCollateralFactorEvent {
    type InputTuple = [
        cToken: AddressLike,
        oldCollateralFactorMantissa: BigNumberish,
        newCollateralFactorMantissa: BigNumberish
    ];
    type OutputTuple = [
        cToken: string,
        oldCollateralFactorMantissa: bigint,
        newCollateralFactorMantissa: bigint
    ];
    interface OutputObject {
        cToken: string;
        oldCollateralFactorMantissa: bigint;
        newCollateralFactorMantissa: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewLiquidationIncentiveEvent {
    type InputTuple = [
        oldLiquidationIncentiveMantissa: BigNumberish,
        newLiquidationIncentiveMantissa: BigNumberish
    ];
    type OutputTuple = [
        oldLiquidationIncentiveMantissa: bigint,
        newLiquidationIncentiveMantissa: bigint
    ];
    interface OutputObject {
        oldLiquidationIncentiveMantissa: bigint;
        newLiquidationIncentiveMantissa: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewPauseGuardianEvent {
    type InputTuple = [
        oldPauseGuardian: AddressLike,
        newPauseGuardian: AddressLike
    ];
    type OutputTuple = [
        oldPauseGuardian: string,
        newPauseGuardian: string
    ];
    interface OutputObject {
        oldPauseGuardian: string;
        newPauseGuardian: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewPriceOracleEvent {
    type InputTuple = [
        oldPriceOracle: AddressLike,
        newPriceOracle: AddressLike
    ];
    type OutputTuple = [oldPriceOracle: string, newPriceOracle: string];
    interface OutputObject {
        oldPriceOracle: string;
        newPriceOracle: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface ProxyCustomImplementation extends BaseContract {
    connect(runner?: ContractRunner | null): ProxyCustomImplementation;
    waitForDeployment(): Promise<this>;
    interface: ProxyCustomImplementationInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    _become: TypedContractMethod<[unitroller: AddressLike], [void], "nonpayable">;
    _borrowGuardianPaused: TypedContractMethod<[], [boolean], "view">;
    _grantComp: TypedContractMethod<[
        recipient: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    _mintGuardianPaused: TypedContractMethod<[], [boolean], "view">;
    _setBorrowCapGuardian: TypedContractMethod<[
        newBorrowCapGuardian: AddressLike
    ], [
        void
    ], "nonpayable">;
    _setBorrowPaused: TypedContractMethod<[
        cToken: AddressLike,
        state: boolean
    ], [
        boolean
    ], "nonpayable">;
    _setCloseFactor: TypedContractMethod<[
        newCloseFactorMantissa: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    _setCollateralFactor: TypedContractMethod<[
        cToken: AddressLike,
        newCollateralFactorMantissa: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    _setCompSpeeds: TypedContractMethod<[
        cTokens: AddressLike[],
        supplySpeeds: BigNumberish[],
        borrowSpeeds: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    _setContributorCompSpeed: TypedContractMethod<[
        contributor: AddressLike,
        compSpeed: BigNumberish
    ], [
        void
    ], "nonpayable">;
    _setLiquidationIncentive: TypedContractMethod<[
        newLiquidationIncentiveMantissa: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    _setMarketBorrowCaps: TypedContractMethod<[
        cTokens: AddressLike[],
        newBorrowCaps: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    _setMintPaused: TypedContractMethod<[
        cToken: AddressLike,
        state: boolean
    ], [
        boolean
    ], "nonpayable">;
    _setPauseGuardian: TypedContractMethod<[
        newPauseGuardian: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    _setPriceOracle: TypedContractMethod<[
        newOracle: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    _setSeizePaused: TypedContractMethod<[
        state: boolean
    ], [
        boolean
    ], "nonpayable">;
    _setTransferPaused: TypedContractMethod<[
        state: boolean
    ], [
        boolean
    ], "nonpayable">;
    _supportMarket: TypedContractMethod<[
        cToken: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    accountAssets: TypedContractMethod<[
        arg0: AddressLike,
        arg1: BigNumberish
    ], [
        string
    ], "view">;
    admin: TypedContractMethod<[], [string], "view">;
    allMarkets: TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    borrowAllowed: TypedContractMethod<[
        cToken: AddressLike,
        borrower: AddressLike,
        borrowAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    borrowCapGuardian: TypedContractMethod<[], [string], "view">;
    borrowCaps: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    borrowGuardianPaused: TypedContractMethod<[
        arg0: AddressLike
    ], [
        boolean
    ], "view">;
    borrowVerify: TypedContractMethod<[
        cToken: AddressLike,
        borrower: AddressLike,
        borrowAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    checkMembership: TypedContractMethod<[
        account: AddressLike,
        cToken: AddressLike
    ], [
        boolean
    ], "view">;
    "claimComp(address,address[])": TypedContractMethod<[
        holder: AddressLike,
        cTokens: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    "claimComp(address[],address[],bool,bool)": TypedContractMethod<[
        holders: AddressLike[],
        cTokens: AddressLike[],
        borrowers: boolean,
        suppliers: boolean
    ], [
        void
    ], "nonpayable">;
    "claimComp(address)": TypedContractMethod<[
        holder: AddressLike
    ], [
        void
    ], "nonpayable">;
    closeFactorMantissa: TypedContractMethod<[], [bigint], "view">;
    compAccrued: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    compBorrowSpeeds: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    compBorrowState: TypedContractMethod<[
        arg0: AddressLike
    ], [
        [bigint, bigint] & {
            index: bigint;
            block: bigint;
        }
    ], "view">;
    compBorrowerIndex: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    compContributorSpeeds: TypedContractMethod<[
        arg0: AddressLike
    ], [
        bigint
    ], "view">;
    compInitialIndex: TypedContractMethod<[], [bigint], "view">;
    compRate: TypedContractMethod<[], [bigint], "view">;
    compReceivable: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    compSpeeds: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    compSupplierIndex: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    compSupplySpeeds: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    compSupplyState: TypedContractMethod<[
        arg0: AddressLike
    ], [
        [bigint, bigint] & {
            index: bigint;
            block: bigint;
        }
    ], "view">;
    comptrollerImplementation: TypedContractMethod<[], [string], "view">;
    enterMarkets: TypedContractMethod<[
        cTokens: AddressLike[]
    ], [
        bigint[]
    ], "nonpayable">;
    exitMarket: TypedContractMethod<[
        cTokenAddress: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    fixBadAccruals: TypedContractMethod<[
        affectedUsers: AddressLike[],
        amounts: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getAccountLiquidity: TypedContractMethod<[
        account: AddressLike
    ], [
        [bigint, bigint, bigint]
    ], "view">;
    getAllMarkets: TypedContractMethod<[], [string[]], "view">;
    getAssetsIn: TypedContractMethod<[account: AddressLike], [string[]], "view">;
    getBlockNumber: TypedContractMethod<[], [bigint], "view">;
    getCompAddress: TypedContractMethod<[], [string], "view">;
    getHypotheticalAccountLiquidity: TypedContractMethod<[
        account: AddressLike,
        cTokenModify: AddressLike,
        redeemTokens: BigNumberish,
        borrowAmount: BigNumberish
    ], [
        [bigint, bigint, bigint]
    ], "view">;
    isComptroller: TypedContractMethod<[], [boolean], "view">;
    isDeprecated: TypedContractMethod<[cToken: AddressLike], [boolean], "view">;
    lastContributorBlock: TypedContractMethod<[
        arg0: AddressLike
    ], [
        bigint
    ], "view">;
    liquidateBorrowAllowed: TypedContractMethod<[
        cTokenBorrowed: AddressLike,
        cTokenCollateral: AddressLike,
        liquidator: AddressLike,
        borrower: AddressLike,
        repayAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    liquidateBorrowVerify: TypedContractMethod<[
        cTokenBorrowed: AddressLike,
        cTokenCollateral: AddressLike,
        liquidator: AddressLike,
        borrower: AddressLike,
        actualRepayAmount: BigNumberish,
        seizeTokens: BigNumberish
    ], [
        void
    ], "nonpayable">;
    liquidateCalculateSeizeTokens: TypedContractMethod<[
        cTokenBorrowed: AddressLike,
        cTokenCollateral: AddressLike,
        actualRepayAmount: BigNumberish
    ], [
        [bigint, bigint]
    ], "view">;
    liquidationIncentiveMantissa: TypedContractMethod<[], [bigint], "view">;
    markets: TypedContractMethod<[
        arg0: AddressLike
    ], [
        [
            boolean,
            bigint,
            boolean
        ] & {
            isListed: boolean;
            collateralFactorMantissa: bigint;
            isComped: boolean;
        }
    ], "view">;
    maxAssets: TypedContractMethod<[], [bigint], "view">;
    mintAllowed: TypedContractMethod<[
        cToken: AddressLike,
        minter: AddressLike,
        mintAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    mintGuardianPaused: TypedContractMethod<[
        arg0: AddressLike
    ], [
        boolean
    ], "view">;
    mintVerify: TypedContractMethod<[
        cToken: AddressLike,
        minter: AddressLike,
        actualMintAmount: BigNumberish,
        mintTokens: BigNumberish
    ], [
        void
    ], "nonpayable">;
    oracle: TypedContractMethod<[], [string], "view">;
    pauseGuardian: TypedContractMethod<[], [string], "view">;
    pendingAdmin: TypedContractMethod<[], [string], "view">;
    pendingComptrollerImplementation: TypedContractMethod<[], [string], "view">;
    proposal65FixExecuted: TypedContractMethod<[], [boolean], "view">;
    redeemAllowed: TypedContractMethod<[
        cToken: AddressLike,
        redeemer: AddressLike,
        redeemTokens: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    redeemVerify: TypedContractMethod<[
        cToken: AddressLike,
        redeemer: AddressLike,
        redeemAmount: BigNumberish,
        redeemTokens: BigNumberish
    ], [
        void
    ], "nonpayable">;
    repayBorrowAllowed: TypedContractMethod<[
        cToken: AddressLike,
        payer: AddressLike,
        borrower: AddressLike,
        repayAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    repayBorrowVerify: TypedContractMethod<[
        cToken: AddressLike,
        payer: AddressLike,
        borrower: AddressLike,
        actualRepayAmount: BigNumberish,
        borrowerIndex: BigNumberish
    ], [
        void
    ], "nonpayable">;
    seizeAllowed: TypedContractMethod<[
        cTokenCollateral: AddressLike,
        cTokenBorrowed: AddressLike,
        liquidator: AddressLike,
        borrower: AddressLike,
        seizeTokens: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    seizeGuardianPaused: TypedContractMethod<[], [boolean], "view">;
    seizeVerify: TypedContractMethod<[
        cTokenCollateral: AddressLike,
        cTokenBorrowed: AddressLike,
        liquidator: AddressLike,
        borrower: AddressLike,
        seizeTokens: BigNumberish
    ], [
        void
    ], "nonpayable">;
    transferAllowed: TypedContractMethod<[
        cToken: AddressLike,
        src: AddressLike,
        dst: AddressLike,
        transferTokens: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    transferGuardianPaused: TypedContractMethod<[], [boolean], "view">;
    transferVerify: TypedContractMethod<[
        cToken: AddressLike,
        src: AddressLike,
        dst: AddressLike,
        transferTokens: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateContributorRewards: TypedContractMethod<[
        contributor: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_become"): TypedContractMethod<[unitroller: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "_borrowGuardianPaused"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "_grantComp"): TypedContractMethod<[
        recipient: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_mintGuardianPaused"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "_setBorrowCapGuardian"): TypedContractMethod<[
        newBorrowCapGuardian: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setBorrowPaused"): TypedContractMethod<[
        cToken: AddressLike,
        state: boolean
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setCloseFactor"): TypedContractMethod<[
        newCloseFactorMantissa: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setCollateralFactor"): TypedContractMethod<[
        cToken: AddressLike,
        newCollateralFactorMantissa: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setCompSpeeds"): TypedContractMethod<[
        cTokens: AddressLike[],
        supplySpeeds: BigNumberish[],
        borrowSpeeds: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setContributorCompSpeed"): TypedContractMethod<[
        contributor: AddressLike,
        compSpeed: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setLiquidationIncentive"): TypedContractMethod<[
        newLiquidationIncentiveMantissa: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setMarketBorrowCaps"): TypedContractMethod<[
        cTokens: AddressLike[],
        newBorrowCaps: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setMintPaused"): TypedContractMethod<[
        cToken: AddressLike,
        state: boolean
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setPauseGuardian"): TypedContractMethod<[
        newPauseGuardian: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setPriceOracle"): TypedContractMethod<[newOracle: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "_setSeizePaused"): TypedContractMethod<[state: boolean], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "_setTransferPaused"): TypedContractMethod<[state: boolean], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "_supportMarket"): TypedContractMethod<[cToken: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "accountAssets"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "admin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "allMarkets"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "borrowAllowed"): TypedContractMethod<[
        cToken: AddressLike,
        borrower: AddressLike,
        borrowAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "borrowCapGuardian"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "borrowCaps"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "borrowGuardianPaused"): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "borrowVerify"): TypedContractMethod<[
        cToken: AddressLike,
        borrower: AddressLike,
        borrowAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "checkMembership"): TypedContractMethod<[
        account: AddressLike,
        cToken: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "claimComp(address,address[])"): TypedContractMethod<[
        holder: AddressLike,
        cTokens: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "claimComp(address[],address[],bool,bool)"): TypedContractMethod<[
        holders: AddressLike[],
        cTokens: AddressLike[],
        borrowers: boolean,
        suppliers: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "claimComp(address)"): TypedContractMethod<[holder: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "closeFactorMantissa"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "compAccrued"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "compBorrowSpeeds"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "compBorrowState"): TypedContractMethod<[
        arg0: AddressLike
    ], [
        [bigint, bigint] & {
            index: bigint;
            block: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "compBorrowerIndex"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "compContributorSpeeds"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "compInitialIndex"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "compRate"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "compReceivable"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "compSpeeds"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "compSupplierIndex"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "compSupplySpeeds"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "compSupplyState"): TypedContractMethod<[
        arg0: AddressLike
    ], [
        [bigint, bigint] & {
            index: bigint;
            block: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "comptrollerImplementation"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "enterMarkets"): TypedContractMethod<[cTokens: AddressLike[]], [bigint[]], "nonpayable">;
    getFunction(nameOrSignature: "exitMarket"): TypedContractMethod<[cTokenAddress: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "fixBadAccruals"): TypedContractMethod<[
        affectedUsers: AddressLike[],
        amounts: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getAccountLiquidity"): TypedContractMethod<[
        account: AddressLike
    ], [
        [bigint, bigint, bigint]
    ], "view">;
    getFunction(nameOrSignature: "getAllMarkets"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getAssetsIn"): TypedContractMethod<[account: AddressLike], [string[]], "view">;
    getFunction(nameOrSignature: "getBlockNumber"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getCompAddress"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getHypotheticalAccountLiquidity"): TypedContractMethod<[
        account: AddressLike,
        cTokenModify: AddressLike,
        redeemTokens: BigNumberish,
        borrowAmount: BigNumberish
    ], [
        [bigint, bigint, bigint]
    ], "view">;
    getFunction(nameOrSignature: "isComptroller"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "isDeprecated"): TypedContractMethod<[cToken: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "lastContributorBlock"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "liquidateBorrowAllowed"): TypedContractMethod<[
        cTokenBorrowed: AddressLike,
        cTokenCollateral: AddressLike,
        liquidator: AddressLike,
        borrower: AddressLike,
        repayAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "liquidateBorrowVerify"): TypedContractMethod<[
        cTokenBorrowed: AddressLike,
        cTokenCollateral: AddressLike,
        liquidator: AddressLike,
        borrower: AddressLike,
        actualRepayAmount: BigNumberish,
        seizeTokens: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "liquidateCalculateSeizeTokens"): TypedContractMethod<[
        cTokenBorrowed: AddressLike,
        cTokenCollateral: AddressLike,
        actualRepayAmount: BigNumberish
    ], [
        [bigint, bigint]
    ], "view">;
    getFunction(nameOrSignature: "liquidationIncentiveMantissa"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "markets"): TypedContractMethod<[
        arg0: AddressLike
    ], [
        [
            boolean,
            bigint,
            boolean
        ] & {
            isListed: boolean;
            collateralFactorMantissa: bigint;
            isComped: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "maxAssets"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "mintAllowed"): TypedContractMethod<[
        cToken: AddressLike,
        minter: AddressLike,
        mintAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "mintGuardianPaused"): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "mintVerify"): TypedContractMethod<[
        cToken: AddressLike,
        minter: AddressLike,
        actualMintAmount: BigNumberish,
        mintTokens: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "oracle"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pauseGuardian"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pendingAdmin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pendingComptrollerImplementation"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "proposal65FixExecuted"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "redeemAllowed"): TypedContractMethod<[
        cToken: AddressLike,
        redeemer: AddressLike,
        redeemTokens: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "redeemVerify"): TypedContractMethod<[
        cToken: AddressLike,
        redeemer: AddressLike,
        redeemAmount: BigNumberish,
        redeemTokens: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "repayBorrowAllowed"): TypedContractMethod<[
        cToken: AddressLike,
        payer: AddressLike,
        borrower: AddressLike,
        repayAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "repayBorrowVerify"): TypedContractMethod<[
        cToken: AddressLike,
        payer: AddressLike,
        borrower: AddressLike,
        actualRepayAmount: BigNumberish,
        borrowerIndex: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "seizeAllowed"): TypedContractMethod<[
        cTokenCollateral: AddressLike,
        cTokenBorrowed: AddressLike,
        liquidator: AddressLike,
        borrower: AddressLike,
        seizeTokens: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "seizeGuardianPaused"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "seizeVerify"): TypedContractMethod<[
        cTokenCollateral: AddressLike,
        cTokenBorrowed: AddressLike,
        liquidator: AddressLike,
        borrower: AddressLike,
        seizeTokens: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferAllowed"): TypedContractMethod<[
        cToken: AddressLike,
        src: AddressLike,
        dst: AddressLike,
        transferTokens: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferGuardianPaused"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "transferVerify"): TypedContractMethod<[
        cToken: AddressLike,
        src: AddressLike,
        dst: AddressLike,
        transferTokens: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateContributorRewards"): TypedContractMethod<[contributor: AddressLike], [void], "nonpayable">;
    getEvent(key: "ActionPaused(string,bool)"): TypedContractEvent<ActionPaused_string_bool_Event.InputTuple, ActionPaused_string_bool_Event.OutputTuple, ActionPaused_string_bool_Event.OutputObject>;
    getEvent(key: "ActionPaused(address,string,bool)"): TypedContractEvent<ActionPaused_address_string_bool_Event.InputTuple, ActionPaused_address_string_bool_Event.OutputTuple, ActionPaused_address_string_bool_Event.OutputObject>;
    getEvent(key: "CompAccruedAdjusted"): TypedContractEvent<CompAccruedAdjustedEvent.InputTuple, CompAccruedAdjustedEvent.OutputTuple, CompAccruedAdjustedEvent.OutputObject>;
    getEvent(key: "CompBorrowSpeedUpdated"): TypedContractEvent<CompBorrowSpeedUpdatedEvent.InputTuple, CompBorrowSpeedUpdatedEvent.OutputTuple, CompBorrowSpeedUpdatedEvent.OutputObject>;
    getEvent(key: "CompGranted"): TypedContractEvent<CompGrantedEvent.InputTuple, CompGrantedEvent.OutputTuple, CompGrantedEvent.OutputObject>;
    getEvent(key: "CompReceivableUpdated"): TypedContractEvent<CompReceivableUpdatedEvent.InputTuple, CompReceivableUpdatedEvent.OutputTuple, CompReceivableUpdatedEvent.OutputObject>;
    getEvent(key: "CompSupplySpeedUpdated"): TypedContractEvent<CompSupplySpeedUpdatedEvent.InputTuple, CompSupplySpeedUpdatedEvent.OutputTuple, CompSupplySpeedUpdatedEvent.OutputObject>;
    getEvent(key: "ContributorCompSpeedUpdated"): TypedContractEvent<ContributorCompSpeedUpdatedEvent.InputTuple, ContributorCompSpeedUpdatedEvent.OutputTuple, ContributorCompSpeedUpdatedEvent.OutputObject>;
    getEvent(key: "DistributedBorrowerComp"): TypedContractEvent<DistributedBorrowerCompEvent.InputTuple, DistributedBorrowerCompEvent.OutputTuple, DistributedBorrowerCompEvent.OutputObject>;
    getEvent(key: "DistributedSupplierComp"): TypedContractEvent<DistributedSupplierCompEvent.InputTuple, DistributedSupplierCompEvent.OutputTuple, DistributedSupplierCompEvent.OutputObject>;
    getEvent(key: "Failure"): TypedContractEvent<FailureEvent.InputTuple, FailureEvent.OutputTuple, FailureEvent.OutputObject>;
    getEvent(key: "MarketEntered"): TypedContractEvent<MarketEnteredEvent.InputTuple, MarketEnteredEvent.OutputTuple, MarketEnteredEvent.OutputObject>;
    getEvent(key: "MarketExited"): TypedContractEvent<MarketExitedEvent.InputTuple, MarketExitedEvent.OutputTuple, MarketExitedEvent.OutputObject>;
    getEvent(key: "MarketListed"): TypedContractEvent<MarketListedEvent.InputTuple, MarketListedEvent.OutputTuple, MarketListedEvent.OutputObject>;
    getEvent(key: "NewBorrowCap"): TypedContractEvent<NewBorrowCapEvent.InputTuple, NewBorrowCapEvent.OutputTuple, NewBorrowCapEvent.OutputObject>;
    getEvent(key: "NewBorrowCapGuardian"): TypedContractEvent<NewBorrowCapGuardianEvent.InputTuple, NewBorrowCapGuardianEvent.OutputTuple, NewBorrowCapGuardianEvent.OutputObject>;
    getEvent(key: "NewCloseFactor"): TypedContractEvent<NewCloseFactorEvent.InputTuple, NewCloseFactorEvent.OutputTuple, NewCloseFactorEvent.OutputObject>;
    getEvent(key: "NewCollateralFactor"): TypedContractEvent<NewCollateralFactorEvent.InputTuple, NewCollateralFactorEvent.OutputTuple, NewCollateralFactorEvent.OutputObject>;
    getEvent(key: "NewLiquidationIncentive"): TypedContractEvent<NewLiquidationIncentiveEvent.InputTuple, NewLiquidationIncentiveEvent.OutputTuple, NewLiquidationIncentiveEvent.OutputObject>;
    getEvent(key: "NewPauseGuardian"): TypedContractEvent<NewPauseGuardianEvent.InputTuple, NewPauseGuardianEvent.OutputTuple, NewPauseGuardianEvent.OutputObject>;
    getEvent(key: "NewPriceOracle"): TypedContractEvent<NewPriceOracleEvent.InputTuple, NewPriceOracleEvent.OutputTuple, NewPriceOracleEvent.OutputObject>;
    filters: {
        "ActionPaused(string,bool)": TypedContractEvent<ActionPaused_string_bool_Event.InputTuple, ActionPaused_string_bool_Event.OutputTuple, ActionPaused_string_bool_Event.OutputObject>;
        "ActionPaused(address,string,bool)": TypedContractEvent<ActionPaused_address_string_bool_Event.InputTuple, ActionPaused_address_string_bool_Event.OutputTuple, ActionPaused_address_string_bool_Event.OutputObject>;
        "CompAccruedAdjusted(address,uint256,uint256)": TypedContractEvent<CompAccruedAdjustedEvent.InputTuple, CompAccruedAdjustedEvent.OutputTuple, CompAccruedAdjustedEvent.OutputObject>;
        CompAccruedAdjusted: TypedContractEvent<CompAccruedAdjustedEvent.InputTuple, CompAccruedAdjustedEvent.OutputTuple, CompAccruedAdjustedEvent.OutputObject>;
        "CompBorrowSpeedUpdated(address,uint256)": TypedContractEvent<CompBorrowSpeedUpdatedEvent.InputTuple, CompBorrowSpeedUpdatedEvent.OutputTuple, CompBorrowSpeedUpdatedEvent.OutputObject>;
        CompBorrowSpeedUpdated: TypedContractEvent<CompBorrowSpeedUpdatedEvent.InputTuple, CompBorrowSpeedUpdatedEvent.OutputTuple, CompBorrowSpeedUpdatedEvent.OutputObject>;
        "CompGranted(address,uint256)": TypedContractEvent<CompGrantedEvent.InputTuple, CompGrantedEvent.OutputTuple, CompGrantedEvent.OutputObject>;
        CompGranted: TypedContractEvent<CompGrantedEvent.InputTuple, CompGrantedEvent.OutputTuple, CompGrantedEvent.OutputObject>;
        "CompReceivableUpdated(address,uint256,uint256)": TypedContractEvent<CompReceivableUpdatedEvent.InputTuple, CompReceivableUpdatedEvent.OutputTuple, CompReceivableUpdatedEvent.OutputObject>;
        CompReceivableUpdated: TypedContractEvent<CompReceivableUpdatedEvent.InputTuple, CompReceivableUpdatedEvent.OutputTuple, CompReceivableUpdatedEvent.OutputObject>;
        "CompSupplySpeedUpdated(address,uint256)": TypedContractEvent<CompSupplySpeedUpdatedEvent.InputTuple, CompSupplySpeedUpdatedEvent.OutputTuple, CompSupplySpeedUpdatedEvent.OutputObject>;
        CompSupplySpeedUpdated: TypedContractEvent<CompSupplySpeedUpdatedEvent.InputTuple, CompSupplySpeedUpdatedEvent.OutputTuple, CompSupplySpeedUpdatedEvent.OutputObject>;
        "ContributorCompSpeedUpdated(address,uint256)": TypedContractEvent<ContributorCompSpeedUpdatedEvent.InputTuple, ContributorCompSpeedUpdatedEvent.OutputTuple, ContributorCompSpeedUpdatedEvent.OutputObject>;
        ContributorCompSpeedUpdated: TypedContractEvent<ContributorCompSpeedUpdatedEvent.InputTuple, ContributorCompSpeedUpdatedEvent.OutputTuple, ContributorCompSpeedUpdatedEvent.OutputObject>;
        "DistributedBorrowerComp(address,address,uint256,uint256)": TypedContractEvent<DistributedBorrowerCompEvent.InputTuple, DistributedBorrowerCompEvent.OutputTuple, DistributedBorrowerCompEvent.OutputObject>;
        DistributedBorrowerComp: TypedContractEvent<DistributedBorrowerCompEvent.InputTuple, DistributedBorrowerCompEvent.OutputTuple, DistributedBorrowerCompEvent.OutputObject>;
        "DistributedSupplierComp(address,address,uint256,uint256)": TypedContractEvent<DistributedSupplierCompEvent.InputTuple, DistributedSupplierCompEvent.OutputTuple, DistributedSupplierCompEvent.OutputObject>;
        DistributedSupplierComp: TypedContractEvent<DistributedSupplierCompEvent.InputTuple, DistributedSupplierCompEvent.OutputTuple, DistributedSupplierCompEvent.OutputObject>;
        "Failure(uint256,uint256,uint256)": TypedContractEvent<FailureEvent.InputTuple, FailureEvent.OutputTuple, FailureEvent.OutputObject>;
        Failure: TypedContractEvent<FailureEvent.InputTuple, FailureEvent.OutputTuple, FailureEvent.OutputObject>;
        "MarketEntered(address,address)": TypedContractEvent<MarketEnteredEvent.InputTuple, MarketEnteredEvent.OutputTuple, MarketEnteredEvent.OutputObject>;
        MarketEntered: TypedContractEvent<MarketEnteredEvent.InputTuple, MarketEnteredEvent.OutputTuple, MarketEnteredEvent.OutputObject>;
        "MarketExited(address,address)": TypedContractEvent<MarketExitedEvent.InputTuple, MarketExitedEvent.OutputTuple, MarketExitedEvent.OutputObject>;
        MarketExited: TypedContractEvent<MarketExitedEvent.InputTuple, MarketExitedEvent.OutputTuple, MarketExitedEvent.OutputObject>;
        "MarketListed(address)": TypedContractEvent<MarketListedEvent.InputTuple, MarketListedEvent.OutputTuple, MarketListedEvent.OutputObject>;
        MarketListed: TypedContractEvent<MarketListedEvent.InputTuple, MarketListedEvent.OutputTuple, MarketListedEvent.OutputObject>;
        "NewBorrowCap(address,uint256)": TypedContractEvent<NewBorrowCapEvent.InputTuple, NewBorrowCapEvent.OutputTuple, NewBorrowCapEvent.OutputObject>;
        NewBorrowCap: TypedContractEvent<NewBorrowCapEvent.InputTuple, NewBorrowCapEvent.OutputTuple, NewBorrowCapEvent.OutputObject>;
        "NewBorrowCapGuardian(address,address)": TypedContractEvent<NewBorrowCapGuardianEvent.InputTuple, NewBorrowCapGuardianEvent.OutputTuple, NewBorrowCapGuardianEvent.OutputObject>;
        NewBorrowCapGuardian: TypedContractEvent<NewBorrowCapGuardianEvent.InputTuple, NewBorrowCapGuardianEvent.OutputTuple, NewBorrowCapGuardianEvent.OutputObject>;
        "NewCloseFactor(uint256,uint256)": TypedContractEvent<NewCloseFactorEvent.InputTuple, NewCloseFactorEvent.OutputTuple, NewCloseFactorEvent.OutputObject>;
        NewCloseFactor: TypedContractEvent<NewCloseFactorEvent.InputTuple, NewCloseFactorEvent.OutputTuple, NewCloseFactorEvent.OutputObject>;
        "NewCollateralFactor(address,uint256,uint256)": TypedContractEvent<NewCollateralFactorEvent.InputTuple, NewCollateralFactorEvent.OutputTuple, NewCollateralFactorEvent.OutputObject>;
        NewCollateralFactor: TypedContractEvent<NewCollateralFactorEvent.InputTuple, NewCollateralFactorEvent.OutputTuple, NewCollateralFactorEvent.OutputObject>;
        "NewLiquidationIncentive(uint256,uint256)": TypedContractEvent<NewLiquidationIncentiveEvent.InputTuple, NewLiquidationIncentiveEvent.OutputTuple, NewLiquidationIncentiveEvent.OutputObject>;
        NewLiquidationIncentive: TypedContractEvent<NewLiquidationIncentiveEvent.InputTuple, NewLiquidationIncentiveEvent.OutputTuple, NewLiquidationIncentiveEvent.OutputObject>;
        "NewPauseGuardian(address,address)": TypedContractEvent<NewPauseGuardianEvent.InputTuple, NewPauseGuardianEvent.OutputTuple, NewPauseGuardianEvent.OutputObject>;
        NewPauseGuardian: TypedContractEvent<NewPauseGuardianEvent.InputTuple, NewPauseGuardianEvent.OutputTuple, NewPauseGuardianEvent.OutputObject>;
        "NewPriceOracle(address,address)": TypedContractEvent<NewPriceOracleEvent.InputTuple, NewPriceOracleEvent.OutputTuple, NewPriceOracleEvent.OutputObject>;
        NewPriceOracle: TypedContractEvent<NewPriceOracleEvent.InputTuple, NewPriceOracleEvent.OutputTuple, NewPriceOracleEvent.OutputObject>;
    };
}
