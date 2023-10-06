interface String {
  empty: boolean;
  equalsIgnoreCase: (other: string) => string;
}

type Consumer<T> = (c: T) => void;
type ResourceLocation = `${string}:${string}`;

interface JsonElement {
  // getAsBigDecimal(): java.math.BigDecimal;
  // getAsBigInteger(): java.math.BigInteger;
  getAsBoolean(): boolean;
  getAsByte(): number;
  getAsCharacter(): number;
  getAsDouble(): number;
  getAsFloat(): number;
  getAsInt(): number;
  // Use the as keyword instead.
  // For example: (myJsonElement as JsonArray).getElement(0)
  //getAsJsonArray(): JsonArray;
  //getAsJsonNull(): JsonNull;
  //getAsJsonObject(): JsonObject;
  //getAsJsonPrimitive(): JsonPrimitive;
  getAsLong(): number;
  getAsNumber(): number;
  getAsShort(): number;
  getAsString(): string;
  isJsonArray(): boolean;
  isJsonNull(): boolean;
  isJsonObject(): boolean;
  isJsonPrimitive(): boolean;
  toString(): string;
}

interface JsonNull extends JsonElement {}

interface JsonObject extends JsonElement {
  add(property: string, value: JsonElement): void;
  addProperty(property: string, value: boolean): void;
  addProperty(property: string, value: number): void;
  addProperty(property: string, value: number): void;
  addProperty(property: string, value: string): void;
  deepCopy(): JsonObject;
  //entrySet(): Set<java.util.Map.Entry<java.lang.String,JsonElement>>;
  equals(o: unknown): boolean;
  get(memberName: string): JsonElement;
  getAsJsonArray(memberName: string): JsonArray;
  getAsJsonObject(memberName: string): JsonObject;
  getAsJsonPrimitive(memberName: string): JsonPrimitive;
  has(memberName: string): boolean;
  hashCode(): number;
  keySet(): Set<string>;
  remove(property: string): JsonElement;
  size(): number;
}

interface JsonArray extends JsonElement {
  add(character: number): void;
  add(number: number): void;
  add(string: string): void;
  addAll(array: JsonArray): void;
  contains(element: JsonElement): boolean;
  deepCopy(): JsonArray;
  equals(o: unknown): boolean;
  get(i: number): JsonElement;
  //getAsBigDecimal(): java.math.BigDecimal;
  //getAsBigInteger(): java.math.BigInteger;
  getAsBoolean(): boolean;
  getAsByte(): number;
  getAsCharacter(): number;
  getAsDouble(): number;
  getAsFloat(): number;
  getAsInt(): number;
  getAsLong(): number;
  getAsNumber(): number;
  getAsShort(): number;
  getAsString(): string;
  hashCode(): number;
  //iterator(): java.util.Iterator<JsonElement>;
  remove(index: number): JsonElement;
  remove(element: JsonElement): boolean;
  set(index: number, element: JsonElement): JsonElement;
  size(): number;
}

interface JsonPrimitive extends JsonElement {
  equals(obj: unknown): boolean;
  //getAsBigDecimal(): java.math.BigDecimal;
  //getAsBigInteger(): java.math.BigInteger;
  getAsBoolean(): boolean;
  getAsByte(): number;
  getAsCharacter(): number;
  getAsDouble(): number;
  getAsFloat(): number;
  getAsInt(): number;
  getAsLong(): number;
  getAsNumber(): number;
  getAsShort(): number;
  getAsString(): string;
  hashCode(): number;
  isBoolean(): boolean;
  isNumber(): boolean;
  isString(): boolean;
}

interface ModelGenerator {
  parent(s: string): void;
  texture(name: string, texture: string): void;
  textures(json: Record<string, unknown>): void;
  //TODO: add void element(Consumer<Element> consumer)
}

interface Model {
  model(s: string): Model;
  x(x: number): Model;
  y(y: number): Model;
  uvlock(): Model;
}

interface Variant {
  model(s: string): Model;
}

interface VariantBlockStateGenerator {
  variant(key: string, consumer: Consumer<Variant>): void;
  variant(key: string, model: string): void;
}

interface Part {
  model(s: string): Model;
}

interface MultipartBlockStateGenerator {
  part(when: string, consumer: Consumer<Part>): void;
  part(when: string, model: string): void;
}

interface Ingredient {}

declare class Item {
  static of(input: ItemStack): ItemStack;
  static of(input: ResourceLocation): ItemStack;
  static of(input: ItemStack, count: number): ItemStack;
  static of(input: ItemStack, nbt: Record<string, unknown>): ItemStack;
  static of(input: ItemStack, count: number, nbt: Record<string, unknown>): ItemStack;
  static withNBT(input: ItemStack, nbt: Record<string, unknown>): ItemStack;
  static withChance(input: ItemStack, chance: number): ItemStack;
  static getList(): ItemStack[];
  static getTypeList(): string[];
  static getEmpty(): ItemStack;
  static clearListCache(): void;
  //static getItem(id: ResourceLocation): Item
  //static findGroup(id: String): CreativeModTab
  static exists(id: ResourceLocation): boolean;
  static isItem(o: unknown): boolean;
}

interface ItemStack extends Ingredient {
  getId(): string;
  getTags(): ResourceLocation[];
  hasTag(tag: ResourceLocation): boolean;
  copy(): ItemStack;
  setCount(count: number): void;
  getCount(): number;
  withCount(): ItemStack;
  isEmpty(): boolean;
  isInvalidRecipeIngredient(): boolean;
  isBlock(): boolean;
  getNbt(): string;
  setNbt(tag: string): void;
  hasNBT(): boolean;
  getNbtString(): string;
  removeNBT(): ItemStack;
  withNBT(nbt: string): ItemStack;
  hasChance(): boolean;
  removeChance(): void;
  setChance(c: number): void;
  getChance(): number;
  withChance(c: number): ItemStack;
  //getName(): Components;
  //withName(Component displayName): ItemStack
  test(other: ItemStack): boolean;
  getStacks(): Set<ItemStack>;
  getFirst(): ItemStack;
  hashCode(): number;
  getEnchantments(): Record<ResourceLocation, number>;
  //hasEnchantment(enchantment: Enchantment, level: number): boolean
  enchant(enchantments: Record<ResourceLocation, number>): ItemStack;
  //enchant(enchantment: Enchantment, level: number): ItemStackJS
  getMod(): string;
  ignoreNBT(): Ingredient;
  weakNBT(): Ingredient;
  areItemsEqual(other: ItemStack): boolean;
  isNBTEqual(other: ItemStack): boolean;
  //getHarvestSpeed(@Nullable BlockContainerJS block): number
  getHarvestSpeed(): number;
  // toJson();
  // toResultJson();
  // toRawResultJson(): JsonElement;
  //toNBT(): CompoundTag
  //onChanged(@Nullable Tag o): void
  getItemGroup(): string;
  getItemIds(): Set<string>;
  //getFluidStack(): FluidStackJS
  //getTypeData(): CompoundTag
}

type KubeEvent = {
  cancel: () => void;
};

type HideREIEvent = KubeEvent & {
  allIngredients: () => ItemStack[];
  hide: (item: string | ItemStack) => void;
  hideAll: () => void;
  hideNoFilter: (item: unknown) => void;
};

type HideJEIEvent = KubeEvent & {
  allIngredients: () => ItemStack[];
  hide: (item: string | Ingredient | Ingredient[]) => void;
  hideAll: () => void;
};

type AddJEIEvent = KubeEvent & {
  add: (item: Ingredient[] | Ingredient) => void;
};

type RemoveJEICategoriesEvent = KubeEvent & {
  getCategories: () => unknown[];
  remove: (categoriesToYeet: ResourceLocation[]) => void;
  yeet: (categoriesToRemove: ResourceLocation[]) => void;
  getCategoryIds: () => ResourceLocation[];
  removeIf: (predicate: (recipeCategory: unknown) => void) => void;
};

type RemoveREICategoriesEvent = KubeEvent & {
  getCategories: () => unknown[];
  remove: (categoriesToYeet: ResourceLocation[]) => void;
  yeet: (categoriesToRemove: ResourceLocation[]) => void;
};

type ClientGenerateAssetsEvent = KubeEvent & {
  getAllAssets: () => Map<ResourceLocation, Record<string, unknown>>;
  addLang: (key: string, value: string) => void;
  add: (location: ResourceLocation, json: Record<string, unknown>) => void;
  addModel: (type: string, id: ResourceLocation, consumer: Consumer<ModelGenerator>) => void;
  addBlockState: (id: ResourceLocation, consumer: Consumer<VariantBlockStateGenerator>) => void;
  addMultipartBlockState: (id: ResourceLocation, consumer: Consumer<MultipartBlockStateGenerator>) => void;
};

declare function onEvent(
  eventName: "jei.add.items",
  consumer: Consumer<AddJEIEvent>
): void;

declare function onEvent(eventName: "jei.hide.items" | "jei.hide.fluids", consumer: Consumer<HideJEIEvent>): void;
declare function onEvent(eventName: "jei.remove.categories", consumer: Consumer<RemoveJEICategoriesEvent>): void;
declare function onEvent(eventName: "client.generate_assets", consumer: Consumer<ClientGenerateAssetsEvent>): void;

declare function onEvent(eventName: string, consumer: (event: unknown) => void): void;

declare namespace global {
  const itemsToHide: ResourceLocation[];
  const itemsToShow: ResourceLocation[];
  const categoriesToHide: ResourceLocation[];
  const colors: string[]
  const limitedColors: string[]
  const removeAndHide: ResourceLocation[]
  const weatheringLevels: string[]
  const waxingAgents: ResourceLocation[]
  const removeAndHideFluid: ResourceLocation[]
  const tfcGrass: ResourceLocation[]
  const stoneToolsTypes: string[]
  const scrapingItems: string[]
  const framesTypes: string[]
  const tfcRockTypes: string[]
  const anvilRockTypes: string[]
  const tfcSandstoneTypes: string[]
  const tfcSoilsTypes: string[]
  const cutBlocksTypes: string[]
  const cutBlocksStoneTypes: string[]
  const invisibleQuernInput: string[]
  const nonTfcVanillaWoodTypes: string[]
  const netherWoodTypes: string[]
  const miscRoofTypes: string[]
  const tfcSoils: string[]
  const tfcFoodSeeds: ResourceLocation[]
  const tfcFoods: string[]
  const tfcSaplings: (`${ResourceLocation}/${string}`)[]
  const tfcWoodTypes: string[]
  const nonVanillatfcWoodTypes: string[]
  const tfcGlobalMetalTypes: string[]
  const oreRarity: string[]
  const tfcMetallumMedTierOres: string[]
  const highTierMetals: string[]
  const tier6MetalTypes: string[]
  const tier5MetalTypes: string[]
  const tier4MetalTypes: string[]
  const tier3MetalTypes: string[]
  const tier2MetalTypes: string[]
  const tier1MetalTypes: string[]
  const tier6MetallumMetalTypes: string[]
  const tier5MetallumMetalTypes: string[]
  const tier4MetallumMetalTypes: string[]
  const tier3MetallumMetalTypes: string[]
  const tier2MetallumMetalTypes: string[]
  const tier1MetallumMetalTypes: string[]
  const toolMetalTypes: string[]
  const tfcMetalParts: string[]
  const forgingBonusWhitelist: string[]
  const tfcToolsTypes: string[]
  const tfcMetalPartsComplete: string[]
  const rosiaMetalTypes: string[]
  const tfcGemTypes: string[]
  const botaniaMetalTypes: string[]
  const tfcMetalTypes: string[]
  const tfcMetallumMetalTypes: string[]
  const firmalifeMetalTypes: string[]
  const tfcBarTypes: string[]
  const tfcSheetmetalTypes: string[]
  const tfcMetallumBarTypes: string[]
  const tfcMetallumSheetmetalTypes: string[]
  const tfcMeatTypes: string[]
  const tfcRawMeatTypes: string[]
  const tfcMoldTypes: string[]
  const vanillaWoodTypes: string[]
  const botaniaWoodTypes: string[]
  const quarkWoodTypes: string[]
  const vanillaRockTypes: string[]
  const botaniaRockTypes: string[]
  const createRockTypes: string[]
  const thermalOreTypes: string[]
  const ieOreTypes: string[]
  const ieItems: string[]
  const caItems: string[]
  const duplicateAnimals: string[]
  const mekanismOreTypes: string[]
  const modFluids: ResourceLocation[]
  const createOreTypes: string[]
  const vanillaOreTypes: string[]
  const vanillaFoodTypes: string[]
  const vanillaCoralTypes: string[]
  const tfcGrains: string[]
  const tfcJarTypes: string[]
  const firmalifeJarTypes: string[]
  const thermalItems: string[]
  const mekanismItems: string[]
  const vanillaItems: string[]
}