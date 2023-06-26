export type SisenseDashboardSettings = {
    showToolbar?: boolean
    showLeftPane?: boolean
    showRightPane?: boolean
};

export type SisenseDashboardEmbedProps = {
    sisenseUrl: string,
    urlParams?: string,
    dashboardId: string,
    frameWidth?: string,
    frameHeight?: string,
    showLeftPane?: boolean,
    showRightPane?: boolean,
    showToolbar?: boolean,
    editMode?: boolean,
    themeId?: string,
    volatile?: boolean,
    filters?: [SisenseJaqlMetadataItem | any],
    onDashboardLoaded?: (event: any, args: any) => void
    onDashboardFirstLoaded?: (loadedDashboard: any) => void
    unmountShouldDestroySisenseFrame?: boolean
    unmountShouldUnloadEmbedSdk?: boolean
}

export type SisenseDashboardEmbedStates = {
    currentDashboard: any,
    isDashboardEditable: boolean
}

export type SisenseJaql = {
    datasource: {
        title: string,
        fullname?: string,
        id?: string,
        address?: string,
        database?: string
    },
    metadata: [SisenseJaqlMetadataItem],
    format?: string,
    offset?: number,
    count?: number,
    csvSeparator?: string,
    isMaskedResponse?: boolean
}

export type SisenseJaqlMetadataItem = {
    jaql: SisenseJaqlDimension | SisenseJaqlDateDimension | SisenseJaqlDimAggregation | SisenseJaqlDateAggregation | SisenseJaqlFormulaAggregation | any,
    panel?: "scope" | string //background filter if panel: "scope"
}

export type SisenseJaqlDimension = {
    title?: string,
    datatype?: string,
    dim: string,
    filter?: SisenseJaqlFilterItem | any
}

export type SisenseJaqlDateDimension = {
    title?: string,
    datatype?: string,
    dim: string,
    level: "years" | "quarters" | "months" | "days" | "hours" | "minutes" | "timestamp" | string
    filter?: SisenseJaqlFilterItem | any
}

export type SisenseJaqlDimAggregation = {
    title?: string,
    datatype?: string,
    dim: string,
    agg: "avg" | "count" | "countduplicates" | "min" | "max" | "median" | "stdev" | "stdevp" | "sum" | "var" | "varp" | string
    filter?: SisenseJaqlFilterItem | any
}

export type SisenseJaqlDateAggregation = {
    title?: string,
    datatype?: string,
    dim: string,
    bucket?: number,
    level: "years" | "quarters" | "months" | "days" | "hours" | "minutes" | "timestamp" | string
    agg: "avg" | "count" | "countduplicates" | "min" | "max" | "median" | "stdev" | "stdevp" | "sum" | "var" | "varp" | string
    filter?: SisenseJaqlFilterItem | any
}

export type SisenseJaqlFormulaAggregation = {
    title?: string,
    datatype?: string,
    formula: string,
    context: any,
    filter?: SisenseJaqlFilterItem | any
}

export type SisenseJaqlFilterItem =
    SisenseJaqlMemberFilter | SisenseJaqlTextFilter | SisenseJaqlTextFilter | SisenseJaqlMathematicalFilter | SisenseJaqlRelativeDateLastFilter | SisenseJaqlRelativeDateNextFilter | SisenseJaqlTopFilter | SisenseJaqlBottomFilter | SisenseJaqlOrFilter | SisenseJaqlAndFilter


export type SisenseJaqlMemberFilter = {
    members: [string]
}

export type SisenseJaqlTextFilter = {
    equals?: string,
    doesntEqual?: string,
    contains?: string,
    doesntContain?: string,
    startsWith?: string,
    doesntStartWith?: string,
    endsWith?: string,
    doesntEndWidth?: string,
    like?: string
}

export type SisenseJaqlMathematicalFilter = {
    equals?: string,
    doesntEqual?: string,
    from?: string,
    fromNotEqual?: string,
    to?: string,
    toNotEqual?: string,
}

export type SisenseJaqlRelativeDateLastFilter = {
    last: {
        count?: number,
        offset?: number,
        anchor?: string
    }
}

export type SisenseJaqlRelativeDateNextFilter = {
    next: {
        count?: number,
        offset?: number,
        anchor?: string
    }
}

export type SisenseJaqlTopFilter = {
    top: number,
    by: SisenseJaqlDimAggregation | SisenseJaqlFormulaAggregation | any
}

export type SisenseJaqlBottomFilter = {
    bottom: number,
    by: SisenseJaqlDimAggregation | SisenseJaqlFormulaAggregation | any
}

export type SisenseJaqlExclusionaryFilter = {
    exclude: SisenseJaqlFilterItem | any
}

//need to check syntax on how and/or is combined, plus filter relationships (editor)
export type SisenseJaqlOrFilter = {
    or: [SisenseJaqlFilterItem | any]
}

export type SisenseJaqlAndFilter = {
    and: [SisenseJaqlFilterItem | any]
}