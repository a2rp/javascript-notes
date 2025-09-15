import { Styled } from './styled'
import EcmaScriptEditions from './topics/EcmaScriptEditions'
import EngineVsRuntimeVsHost from './topics/EngineVsRuntimeVsHost'
import WhatIsJavaScript from './topics/WhatIsJavaScript'
import StatementsVsExpressions from './topics/StatementsVsExpressions'
import StrictMode from './topics/StrictMode'
import AutomaticSemicolonInsertion from './topics/AutomaticSemicolonInsertion'
import IdentifiersAndReservedWords from './topics/IdentifiersAndReservedWords'
import CommentsAndPragmas from './topics/CommentsAndPragmas'
import ScriptVsModule from './topics/ScriptVsModule'
import ModuleScopeAndLiveBindings from './topics/ModuleScopeAndLiveBindings'
import ImportExportForms from './topics/ImportExportForms'
import DynamicImport from './topics/DynamicImport'
import TopLevelAwait from './topics/TopLevelAwait'
import CjsVsEsmInterop from './topics/CjsVsEsmInterop'
import PrimitiveTypesOverview from './topics/PrimitiveTypesOverview'
import ObjectTypeOverview from './topics/ObjectTypeOverview'
import TypeofNuances from './topics/TypeofNuances'
import ValueVsReference from './topics/ValueVsReference'
import MutabilityVsImmutability from './topics/MutabilityVsImmutability'
import FreezeSealPreventExtensions from './topics/FreezeSealPreventExtensions'
import BoxingAndUnboxing from './topics/BoxingAndUnboxing'
import ToPrimitive from './topics/ToPrimitive'
import TruthyAndFalsy from './topics/TruthyAndFalsy'
import CoercionToNumberAndString from './topics/CoercionToNumberAndString'
import EqualityAlgorithms from './topics/EqualityAlgorithms'
import SameValueZeroAndEdgeCases from './topics/SameValueZeroAndEdgeCases'
import NumberLiteralsAndSeparators from './topics/NumberLiteralsAndSeparators'
import FloatingPointPrecision from './topics/FloatingPointPrecision'
import NumberParsing from './topics/NumberParsing'
import NumberChecks from './topics/NumberChecks'
import MathEssentials from './topics/MathEssentials'
import BigIntBasics from './topics/BigIntBasics'
import StringLiteralsAndEscapes from './topics/StringLiteralsAndEscapes'
import TemplateLiterals from './topics/TemplateLiterals'
import TaggedTemplates from './topics/TaggedTemplates'
import UnicodeAndCodePoints from './topics/UnicodeAndCodePoints'
import StringOperations from './topics/StringOperations'
import StringIterationAndNormalization from './topics/StringIterationAndNormalization'
import LogicalOperators from './topics/LogicalOperators'
import NullishCoalescing from './topics/NullishCoalescing'
import OptionalChaining from './topics/OptionalChaining'
import LogicalAssignmentOperators from './topics/LogicalAssignmentOperators'
import TernaryOperator from './topics/TernaryOperator'
import OperatorPrecedenceAndAssociativity from './topics/OperatorPrecedenceAndAssociativity'
import ArithmeticOperators from './topics/ArithmeticOperators'
import BitwiseOperators from './topics/BitwiseOperators'
import UnaryOperators from './topics/UnaryOperators'
import CommaOperator from './topics/CommaOperator'
import SpreadAndRest from './topics/SpreadAndRest'
import DestructuringBasics from './topics/DestructuringBasics'

const Home = () => {


    return (
        <>
            <Styled.Wrapper>
                <fieldset>
                    <legend>From Wikipedia, the free encyclopedia - last updated: Sep 15, 2025</legend>
                    <p>
                        JavaScript (JS) is a programming language and core technology of the web platform, alongside HTML and CSS. Ninety-nine percent of websites on the World Wide Web use JavaScript on the client side for webpage behavior.
                    </p>
                    <p>
                        Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime system for non-browser usage is Node.js[citation needed].
                    </p>
                    <p>
                        JavaScript is a high-level, often just-in-time-compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).
                    </p>
                    <p>
                        The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O.
                    </p>
                    <p>
                        Although Java and JavaScript are similar in name and syntax, the two languages are distinct and differ greatly in design.
                    </p>
                </fieldset>

                <WhatIsJavaScript />
                <EngineVsRuntimeVsHost />
                <EcmaScriptEditions />
                <StrictMode />
                <StatementsVsExpressions />
                <AutomaticSemicolonInsertion />
                <IdentifiersAndReservedWords />
                <CommentsAndPragmas />
                <ScriptVsModule />
                <ModuleScopeAndLiveBindings />
                <ImportExportForms />
                <DynamicImport />
                <TopLevelAwait />
                <CjsVsEsmInterop />
                <PrimitiveTypesOverview />
                <ObjectTypeOverview />
                <TypeofNuances />
                <ValueVsReference />
                <MutabilityVsImmutability />
                <FreezeSealPreventExtensions />
                <BoxingAndUnboxing />
                <ToPrimitive />
                <TruthyAndFalsy />
                <CoercionToNumberAndString />
                <EqualityAlgorithms />
                <SameValueZeroAndEdgeCases />
                <NumberLiteralsAndSeparators />
                <FloatingPointPrecision />
                <NumberParsing />
                <NumberChecks />
                <MathEssentials />
                <BigIntBasics />
                <StringLiteralsAndEscapes />
                <TemplateLiterals />
                <TaggedTemplates />
                <UnicodeAndCodePoints />
                <StringOperations />
                <StringIterationAndNormalization />
                <LogicalOperators />
                <NullishCoalescing />
                <OptionalChaining />
                <LogicalAssignmentOperators />
                <TernaryOperator />
                <OperatorPrecedenceAndAssociativity />
                <ArithmeticOperators />
                <BitwiseOperators />
                <UnaryOperators />
                <CommaOperator />
                <SpreadAndRest />
                <DestructuringBasics />
            </Styled.Wrapper>
        </>
    )
}

export default Home

