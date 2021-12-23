const getUserByIdFirebase = async (client, idFirebase) => {
    const {rows} = await client.query(
        `
        SELECT * FROM "user" u
        WHERE id_firebase = $1
            AND is_deleted = FALSE
        `,
        [idFirebase],
    );
    return convertSnakeToCamel.keysToCamel(rows[0]);
}