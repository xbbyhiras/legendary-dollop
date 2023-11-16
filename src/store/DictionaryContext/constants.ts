import { EDictionaryEntityId } from './enums'

export const DictionaryActionIDs = Object.freeze({
  [EDictionaryEntityId.AssetPool]: {
    add: 'AssetPool.add',
  },
  [EDictionaryEntityId.Classification]: {
    add: 'Classification.add',
  },
  [EDictionaryEntityId.Expectation]: {
    addExpectation: 'Expectation.addExpectation',
    cancel: 'Expectation.cancel',
    save: 'Expectation.save',
  },
  [EDictionaryEntityId.Individual]: {
    add: 'Individual.add',
  },
  [EDictionaryEntityId.Organisation]: {
    add: 'Organisation.add',
  },
})

export interface IDictionaryAttributeIDs {
  [EDictionaryEntityId.AssetPool]: {
    [key: string]: string
  }
  [EDictionaryEntityId.BalanceSheet]: {
    [key: string]: string
  }
  [EDictionaryEntityId.Calendar]: {
    [key: string]: string
  }
  [EDictionaryEntityId.Classification]: {
    [key: string]: string
  }
  [EDictionaryEntityId.Document]: {
    [key: string]: string
  }
  [EDictionaryEntityId.Expectation]: {
    [key: string]: string
  }
  [EDictionaryEntityId.Fee]: {
    [key: string]: string
  }
  [EDictionaryEntityId.FinancialStatement_Postings]: {
    [key: string]: string
  }
  [EDictionaryEntityId.Individual]: {
    [key: string]: string
  }
  [EDictionaryEntityId.Ledger_Valuations]: {
    [key: string]: string
  }
  [EDictionaryEntityId.Organisation]: {
    [key: string]: string
  }
  [EDictionaryEntityId.ParticipantLedger_Position]: {
    [key: string]: string
  }
  [EDictionaryEntityId.ParticipantLedger_Trade]: {
    [key: string]: string
  }
  [EDictionaryEntityId.PersonRole]: {
    [key: string]: string
  }
  [EDictionaryEntityId.References]: {
    [key: string]: string
  }
  [EDictionaryEntityId.Relationship]: {
    [key: string]: string
  }
  [EDictionaryEntityId.Self]: {
    [key: string]: string
  }
  [EDictionaryEntityId.MarketClassification]: {
    [key: string]: string
  }
}

export const DictionaryAttributeIDs: IDictionaryAttributeIDs = Object.freeze({
  [EDictionaryEntityId.AssetPool]: {
    'account.holder': 'AssetPool.account_holder',
    'account.name': 'AssetPool.account_name',
    'account.number': 'AssetPool.account_number',
    'account.setupDate': 'AssetPool.account_setupDate',
    'custodian.appointmentDate': 'AssetPool.custodian_appointmentDate',
    'custodian.assetClasses': 'AssetPool.custodian_assetClasses',
    'custodian.currencies': 'AssetPool.custodian_currencies',
    'custodian.name': 'AssetPool.custodian_name',
    'custody.accountName': 'AssetPool.custody_accountName',
    'custody.accountNumber': 'AssetPool.custody_accountNumber',
    'custody.accountOpeningDate': 'AssetPool.custody_accountOpeningDate',
    'custody.iban': 'AssetPool.custody_iban',
    'manager.appointmentDate': 'AssetPool.manager_appointmentDate',
    'manager.assetClasses': 'AssetPool.manager_assetClasses',
    'manager.currencies': 'AssetPool.manager_currencies',
    'manager.name': 'AssetPool.manager_name',
    activityStartDate: 'AssetPool.activityStartDate',
    capitalizationFocus: 'AssetPool.capitalizationFocus',
    contactEmail: 'AssetPool.contactEmail',
    crossReferences: 'AssetPool.crossReferences',
    declaredStrategy: 'AssetPool.declaredStrategy',
    description: 'AssetPool.description',
    domicileCountryId: 'AssetPool.domicileCountryId',
    entityLegalForm: 'AssetPool.entityLegalForm',
    establishmentCountry: 'AssetPool.establishmentCountry',
    establishmentDate: 'AssetPool.establishmentDate',
    establishmentType: 'AssetPool.establishmentType',
    geographicFocus: 'AssetPool.geographicFocus',
    governingLaw: 'AssetPool.governingLaw',
    liquidationDate: 'AssetPool.liquidationDate',
    name: 'AssetPool.name',
    positionStartDate: 'AssetPool.positionStartDate',
    preferredRegionClassification: 'AssetPool.preferredRegionClassification',
    preferredSectorClassification: 'AssetPool.preferredSectorClassification',
    principleTelephoneNumber: 'AssetPool.principleTelephoneNumber',
    principleTelephoneNumberAreaCode: 'AssetPool.principleTelephoneNumberAreaCode',
    registeredNumber: 'AssetPool.registeredNumber',
    registrationSource: 'AssetPool.registrationSource',
    reportingCurrency: 'AssetPool.reportingCurrency',
    reportingCurrencyDuplicate: 'AssetPool.reportingCurrencyDuplicate',
    role: 'AssetPool.role',
    sectorFocus: 'AssetPool.sectorFocus',
    shortName: 'AssetPool.shortName',
    Switchboard: 'AssetPool.Switchboard',
    tradingName: 'AssetPool.tradingName',
    valuationPeriod: 'AssetPool.valuationPeriod',
    website: 'AssetPool.website',
  },
  [EDictionaryEntityId.BalanceSheet]: {
    nominalAccountIdL1: 'BalanceSheet.nominalAccountIdL1',
    nominalAccountIdL3: 'BalanceSheet.nominalAccountIdL3',
    nominalAccountIdL4: 'BalanceSheet.nominalAccountIdL4',
    nominalAccountIdL5: 'BalanceSheet.nominalAccountIdL5',
    nominalBalanceChg: 'BalanceSheet.nominalBalanceChg',
    nominalBalanceEnd: 'BalanceSheet.nominalBalanceEnd',
    nominalBalanceStart: 'BalanceSheet.nominalBalanceStart',
    postingCredit: 'BalanceSheet.postingCredit',
    postingDebit: 'BalanceSheet.postingDebit',
  },
  [EDictionaryEntityId.Calendar]: {
    name: 'Calendar.name',
    calendarType: 'Calendar.calendarType',
    countryCode: 'Calendar.countryCode',
    startDate: 'Calendar.startDate',
    endDate: 'Calendar.endDate',
    firstDayOfWeekend: 'Calendar.firstDayOfWeekend',
    lastDayOfWeekend: 'Calendar.lastDayOfWeekend',
    weekend: 'Calendar.weekend',
    holidayDate: 'Calendar.holidayDate',
  },
  [EDictionaryEntityId.Classification]: {
    name: 'Classification.name',
    description: 'Classification.description',
    type: 'Classification.type',
    classificationSystem: 'Classification.classificationSystem',
    owner: 'Classification.owner',
    ownerId: 'Classification.owner',
    parent: 'Classification.parent',
    parentId: 'Classification.parent',
    domainId: 'Classification.domainId',
    groupIds: 'Classification.groupIds',
    lastUpdateTime: 'Classification.lastUpdateTime',
    lastUpdateUser: 'Classification.lastUpdateUser',
  },
  [EDictionaryEntityId.Document]: {
    documentName: 'Document.documentName',
    status: 'Document.status',
  },
  [EDictionaryEntityId.Expectation]: {
    assetPool: 'Expectation.assetPool',
    calendarType: 'Expectation.calendarType',
    contributorName: 'Expectation.contributorName',
    datasourceName: 'Expectation.datasourceName',
    dateFrom: 'Expectation.dateFrom',
    dateRange: 'Expectation.dateRange',
    dateTo: 'Expectation.dateTo',
    destination: 'Expectation.destination',
    dueWithin: 'Expectation.dueWithin',
    fileNamePattern: 'Expectation.fileNamePattern',
    filePattern: 'Expectation.filePattern',
    fileType: 'Expectation.fileType',
    frequency: 'Expectation.frequency',
    lastEdited: 'Expectation.lastEdited',
    serviceGroup: 'Expectation.serviceGroup',
  },
  [EDictionaryEntityId.Fee]: {
    account: 'Fee.account',
    average: 'Fee.average',
    averageBpsPaid: 'Fee.averageBpsPaid',
    averageTicketFeeInBps: 'Fee.averageTicketFeeInBps',
    base: 'Fee.base',
    basisPointsPaid: 'Fee.basisPointsPaid',
    basisPointsPaidPerTicket: 'Fee.basisPointsPaidPerTicket',
    bpsOfTotalValueTraded: 'Fee.bpsOfTotalValueTraded',
    bpsOfGav: 'Fee.bpsOfGav',
    classification: 'Fee.classification',
    commissionsPaid: 'Fee.commissionsPaid',
    commissionsPaidInBase: 'Fee.commissionsPaidInBase',
    counterparty: 'Fee.counterparty',
    counterpartyType: 'Fee.counterpartyType',
    counterpartyUltimateParent: 'Fee.counterpartyUltimateParent',
    group: 'Fee.group',
    local: 'Fee.local',
    localCurrency: 'Fee.localCurrency',
    managerBrokerReference: 'Fee.managerBrokerReference',
    marketClassification: 'Fee.marketClassification',
    maxBpsPaid: 'Fee.maxBpsPaid',
    maximum: 'Fee.maximum',
    metric: 'Fee.metric',
    minBpsPaid: 'Fee.minBpsPaid',
    minimum: 'Fee.minimum',
    subGroup: 'Fee.subGroup',
    ticketCount: 'Fee.ticketCount',
    ticketFee: 'Fee.ticketFee',
    totalAmountPaid: 'Fee.totalAmountPaid',
    totalValue: 'Fee.totalValue',
    tradeCount: 'Fee.tradeCount',
    transactionCount: 'Fee.transactionCount',
    valueTraded: 'Fee.valueTraded',
    valueTradedInBase: 'Fee.valueTradedInBase',
  },
  [EDictionaryEntityId.FinancialStatement_Postings]: {
    activityBase: 'FinancialStatement_Postings.commissionBase',
    description: 'FinancialStatement_Postings.securityDescription',
    inputDate: 'FinancialStatement_Postings.inputTimestamp',
    isin: 'FinancialStatement_Postings.isin',
    movementDate: 'FinancialStatement_Postings.movementDate',
    participantRecord_buySell: 'FinancialStatement_Postings.buySell',
    participantRecord_commissionRateBasisPoints: 'FinancialStatement_Postings.commissionFx',
    participantRecord_grossSettAmtBase: 'FinancialStatement_Postings.grossAmountBase',
    participantRecord_grossSettAmtLocal: 'FinancialStatement_Postings.grossAmountSettlement',
    participantRecord_noSharesSecurities: 'FinancialStatement_Postings.quantity',
    participantRecord_price: 'FinancialStatement_Postings.grossPriceValue',
    postingTag: 'FinancialStatement_Postings.postingTag',
    sedol: 'FinancialStatement_Postings.sedol',
    settlementCurrency: 'FinancialStatement_Postings.currencySettlement',
    tradeDate: 'FinancialStatement_Postings.inputTimestamp',
  },
  [EDictionaryEntityId.Individual]: {
    'contactDetails.businessEmail': 'Individual.contactDetails_businessEmail',
    'contactDetails.mobileOffice': 'Individual.contactDetails_mobileOffice',
    'contactDetails.mobileOfficeCountryCode': 'Individual.contactDetails_mobileOffice',
    'contactDetails.mobilePersonal': 'Individual.contactDetails_mobilePersonal',
    'contactDetails.mobilePersonalCountryCode': 'Individual.contactDetails_mobilePersonalCountryCode',
    'contactDetails.officeNumberDirect': 'Individual.contactDetails_officeNumberDirect',
    'contactDetails.officeNumberDirectCountryCode': 'Individual.contactDetails_officeNumberDirectCountryCode',
    'contactDetails.officeNumberSwitchboard': 'Individual.contactDetails_officeNumberSwitchboard',
    'contactDetails.officeNumberSwitchboardCountryCode': 'Individual.contactDetails_officeNumberSwitchboardCountryCode',
    division: 'Individual.division',
    familyName: 'Individual.familyName',
    fullTimeEmployer: 'Individual.fullTimeEmployer',
    givenName: 'Individual.givenName',
    honorificPrefix: 'Individual.honorificPrefix',
    knownAs: 'Individual.knownAs',
    placeOfWork: 'Individual.placeOfWork',
    position: 'Individual.position',
    secondName: 'Individual.secondName',
    thirdName: 'Individual.thirdName',
  },
  [EDictionaryEntityId.Ledger_Valuations]: {
    costBase: 'Ledger_Valuations.costBase',
    costLocal: 'Ledger_Valuations.costLocal',
    currencyLocal: 'Ledger_Valuations.currencyLocal',
    description: 'Ledger_Valuations.description',
    fxRate: 'Ledger_Valuations.fxRate',
    ledgerAssetType: 'Ledger_Valuations.ledgerAssetType',
    marketValueLocal: 'Ledger_Valuations.marketValueLocal',
    nominalAccountIdL4: 'Ledger_Valuations.nominalAccountIdL4',
    pnlUnrealisedFxBase: 'Ledger_Valuations.pnlUnrealisedFxBase',
    pnlUnrealisedPxBase: 'Ledger_Valuations.pnlUnrealisedPxBase',
    pnlUnrealisedTotalBase: 'Ledger_Valuations.pnlUnrealisedTotalBase',
    totalValueBase: 'Ledger_Valuations.totalValueBase',
    totalValueLocal: 'Ledger_Valuations.totalValueLocal',
    TrbcSector: 'Ledger_Valuations.TrbcSector',
  },
  [EDictionaryEntityId.Organisation]: {
    businessAddress: 'Organisation.businessAddress',
    contactEmail: 'Organisation.contactEmail',
    crossReferences: 'Organisation.crossReferences',
    entityLegalForm: 'Organisation.entityLegalForm',
    establishmentDate: 'Organisation.establishmentDate',
    governingLaw: 'Organisation.governingLaw',
    legalEntityIdentifier: 'Organisation.legalEntityIdentifier',
    name: 'Organisation.name',
    parent: 'Organisation.parent',
    principleTelephoneNumber: 'Organisation.principleTelephoneNumber',
    principleTelephoneNumberAreaCode: 'Organisation.principleTelephoneNumberAreaCode',
    registeredAddress: 'Organisation.registeredAddress',
    registeredNumber: 'Organisation.registeredNumber',
    registrationSource: 'Organisation.registrationSource',
    shortName: 'Organisation.shortName',
    tradingName: 'Organisation.tradingName',
    ultimateParent: 'Organisation.ultimateParent',
    website: 'Organisation.website',
  },
  [EDictionaryEntityId.ParticipantLedger_Position]: {
    accruedIncomeBase: 'ParticipantLedger_Position.accruedIncomeBase',
    accruedIncomeLocal: 'ParticipantLedger_Position.accruedIncomeLocal',
    contributorId: 'ParticipantLedger_Position.contributorId',
    costValueBase: 'ParticipantLedger_Position.costValueBase',
    costValueLocal: 'ParticipantLedger_Position.costValueLocal',
    currencyBase: 'ParticipantLedger_Position.currencyBase',
    currencyLocal: 'ParticipantLedger_Position.currencyLocal',
    fundId: 'ParticipantLedger_Position.fundId',
    id: 'ParticipantLedger_Position.id',
    instrumentId: 'ParticipantLedger_Position.instrumentId',
    marketPriceDirty: 'ParticipantLedger_Position.marketPriceDirty',
    marketPriceMethod: 'ParticipantLedger_Position.marketPriceMethod',
    marketPriceValue: 'ParticipantLedger_Position.marketPriceValue',
    marketValueBase: 'ParticipantLedger_Position.marketValueBase',
    marketValueLocal: 'ParticipantLedger_Position.marketValueLocal',
    quantity: 'ParticipantLedger_Position.quantity',
    securityDescription: 'ParticipantLedger_Position.securityDescription',
    settledQuantity: 'ParticipantLedger_Position.settledQuantity',
    status: 'ParticipantLedger_Position.status',
    timestamp: 'ParticipantLedger_Position.timestamp',
    trueAsOf: 'ParticipantLedger_Position.trueAsOf',
    unrealisedFxPnlBase: 'ParticipantLedger_Position.unrealisedFxPnlBase',
    unrealisedPricePnlBase: 'ParticipantLedger_Position.unrealisedPricePnlBase',
    unrealisedPricePnlLocal: 'ParticipantLedger_Position.unrealisedPricePnlLocal',
    unrealisedTotalPnlBase: 'ParticipantLedger_Position.unrealisedTotalPnlBase',
    unrealisedTotalPnlLocal: 'ParticipantLedger_Position.unrealisedTotalPnlLocal',
    valuationPoint: 'ParticipantLedger_Position.valuationPoint',
  },
  [EDictionaryEntityId.ParticipantLedger_Trade]: {
    aggType: 'ParticipantLedger_Trade.aggType',
    amendmentId: 'ParticipantLedger_Trade.amendmentId',
    amendmentSeq: 'ParticipantLedger_Trade.amendmentSeq',
    assetCostBase: 'ParticipantLedger_Trade.assetCostBase',
    assetCostLocal: 'ParticipantLedger_Trade.assetCostLocal',
    buySell: 'ParticipantLedger_Trade.buySell',
    clientOrderId: 'ParticipantLedger_Trade.clientOrderId',
    commissionBase: 'ParticipantLedger_Trade.commissionBase',
    commissionFx: 'ParticipantLedger_Trade.commissionFx',
    commissionLocal: 'ParticipantLedger_Trade.commissionLocal',
    contributorId: 'ParticipantLedger_Trade.contributorId',
    corporateActionQuantityDelta: 'ParticipantLedger_Trade.corporateActionQuantityDelta',
    corporateActionRatioDenominator: 'ParticipantLedger_Trade.corporateActionRatioDenominator',
    corporateActionRatioNumerator: 'ParticipantLedger_Trade.corporateActionRatioNumerator',
    corporateActionType: 'ParticipantLedger_Trade.corporateActionType',
    counterparties: 'ParticipantLedger_Trade.counterparties',
    counterpartyId: 'ParticipantLedger_Trade.counterpartyId',
    currencyBase: 'ParticipantLedger_Trade.currencyBase',
    currencyLocal: 'ParticipantLedger_Trade.currencyLocal',
    currencySettlement: 'ParticipantLedger_Trade.currencySettlement',
    deleted: 'ParticipantLedger_Trade.deleted',
    dividendRate: 'ParticipantLedger_Trade.dividendRate',
    entryType: 'ParticipantLedger_Trade.entryType',
    feeBase: 'ParticipantLedger_Trade.feeBase',
    feeFx: 'ParticipantLedger_Trade.feeFx',
    feeLocal: 'ParticipantLedger_Trade.feeLocal',
    fileId: 'ParticipantLedger_Trade.fileId',
    forShareClassId: 'ParticipantLedger_Trade.forShareClassId',
    clearingAgent: 'ParticipantLedger_Trade.clearingAgent',
    executionBroker: 'ParticipantLedger_Trade.executionBroker',
    fund: 'ParticipantLedger_Trade.fund',
    fxRate: 'ParticipantLedger_Trade.fxRate',
    commissionRateBasisPoints: 'ParticipantLedger_Trade.commissionRateBasisPoints',
    grossAmountBase: 'ParticipantLedger_Trade.grossAmountBase',
    grossAmountLocal: 'ParticipantLedger_Trade.grossAmountLocal',
    grossAmountSettlement: 'ParticipantLedger_Trade.grossAmountSettlement',
    grossPriceDirty: 'ParticipantLedger_Trade.grossPriceDirty',
    grossPriceMethod: 'ParticipantLedger_Trade.grossPriceMethod',
    grossPriceValue: 'ParticipantLedger_Trade.grossPriceValue',
    id: 'ParticipantLedger_Trade.id',
    inputTimestamp: 'ParticipantLedger_Trade.inputTimestamp',
    instrumentId: 'ParticipantLedger_Trade.instrumentId',
    netAmountBase: 'ParticipantLedger_Trade.netAmountBase',
    netAmountLocal: 'ParticipantLedger_Trade.netAmountLocal',
    netAmountSettlement: 'ParticipantLedger_Trade.netAmountSettlement',
    notes: 'ParticipantLedger_Trade.notes',
    portfolioId: 'ParticipantLedger_Trade.portfolioId',
    quantity: 'ParticipantLedger_Trade.quantity',
    realisedFxPnlBase: 'ParticipantLedger_Trade.realisedFxPnlBase',
    realisedPricePnlBase: 'ParticipantLedger_Trade.realisedPricePnlBase',
    realisedPricePnlLocal: 'ParticipantLedger_Trade.realisedPricePnlLocal',
    rowNumber: 'ParticipantLedger_Trade.rowNumber',
    securityDescription: 'ParticipantLedger_Trade.securityDescription',
    settlementTimestamp: 'ParticipantLedger_Trade.settlementTimestamp',
    status: 'ParticipantLedger_Trade.status',
    trueAsOf: 'ParticipantLedger_Trade.trueAsOf',
    type: 'ParticipantLedger_Trade.type',
    tradeFx: 'ParticipantLedger_Trade.tradeFx',
  },
  [EDictionaryEntityId.PersonRole]: {
    email: 'PersonRole.email',
    username: 'PersonRole.username',
  },
  [EDictionaryEntityId.References]: {
    contributor: 'References.contributor',
    references: 'References.references',
  },
  [EDictionaryEntityId.Relationship]: {
    endDate: 'Relationship.endDate',
    fromEntityId: 'Relationship.fromEntityId',
    startDate: 'Relationship.startDate',
    toEntityId: 'Relationship.toEntityId',
  },
  [EDictionaryEntityId.Self]: {
    additionalNames: 'Self.additionalNames',
    familyName: 'Self.familyName',
    givenName: 'Self.givenName',
    honorificPrefix: 'Self.honorificPrefix',
    honorificSuffixes: 'Self.honorificSuffixes',
    isDeleted: 'Self.isDeleted',
    knownAs: 'Self.knownAs',
  },
  [EDictionaryEntityId.MarketClassification]: {
    advancedEmerging: 'MarketClassification.advancedEmerging',
    developed: 'MarketClassification.developed',
    secondaryEmerging: 'MarketClassification.secondaryEmerging',
  },
})

export const DictionaryDecoratorIDs = Object.freeze({
  [EDictionaryEntityId.AssetPool]: {
    custody: 'AssetPool.custody',
    keyDocuments: 'AssetPool.keyDocuments',
    references: 'AssetPool.references',
    summary: 'AssetPool.summary',
  },
  [EDictionaryEntityId.Calendar]: {
    title: 'Calendar.title',
  },
  [EDictionaryEntityId.Classification]: {
    title: 'Classification.title',
  },
  [EDictionaryEntityId.Document]: {
    keyDocuments: 'Document.keyDocuments',
  },
  [EDictionaryEntityId.Expectation]: {
    showDisabled: 'Expectation.showDisabled',
    showInactive: 'Expectation.showInactive',
  },
  [EDictionaryEntityId.ParticipantLedger_Trade]: {
    Columns: 'ParticipantLedger_Trade.Columns',
    Contributor: 'ParticipantLedger_Trade.Contributor',
    FileType: 'ParticipantLedger_Trade.FileType',
    Manager: 'ParticipantLedger_Trade.Manager',
    PageTitle: 'ParticipantLedger_Trade.PageTitle',
    SMA: 'ParticipantLedger_Trade.SMA',
    Status: 'ParticipantLedger_Trade.Status',
  },
  [EDictionaryEntityId.References]: {
    crossReferences: 'References.crossReferences',
    identifiers: 'References.identifiers',
  },
})
