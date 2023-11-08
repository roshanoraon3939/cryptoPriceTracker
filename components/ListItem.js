import React from "react";
import { formatCurrency } from "react-native-format-currency";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ListItem = ({
  name,
  symbols,
  currentPrice,
  priceChangePercentage7d,
  logoUrl,
  onPress,
}) => {
  const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] =
    formatCurrency({ amount: Number(currentPrice), code: "USD" });
  const priceChangeColor = priceChangePercentage7d > 0 ? "#34C759" : "#FF3B30";

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemWrapper}>
        {/* Left side */}
        <View style={styles.leftWrapper}>
          <Image source={{ uri: logoUrl }} style={styles.image} />

          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{name}</Text>

            <Text style={styles.subtitle}>{symbols.toUpperCase()}</Text>
          </View>
        </View>

        {/* Right side */}
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>{valueFormattedWithSymbol}</Text>

          <Text style={[styles.subtitle, { color: priceChangeColor }]}>
            {priceChangePercentage7d.toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    margin: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 48,
    width: 48,
  },
  titlesWrapper: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#A9ABB1",
  },
  rightWrapper: {
    alignItems: "flex-end",
  },
});

export default ListItem;
